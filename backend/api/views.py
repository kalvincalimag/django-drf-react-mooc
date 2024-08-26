import random
from api.serializers import MyTokenObtainPairSerializer, CustomUserSerializer, ProfileSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from userauths.models import CustomUser, Profile
from rest_framework import generics
from api.serializers import RegisterSerializer
from rest_framework.permissions import AllowAny 
from rest_framework_simplejwt.tokens import RefreshToken

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    
def generate_random_otp(length=7):
    digits = "0123456789"
    otp = ''.join(random.choice(digits) for _ in range(length))
    return otp
    
class PasswordResetEmailVerifyAPIView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = CustomUserSerializer

    def get_object(self):
        email = self.kwargs['email']
        user = CustomUser.objects.filter(email=email).first()
        
        if user:            
            uuidb64 = user.pk
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh.access_token)
            user.refresh_token = refresh_token
            user.otp = generate_random_otp()
            user.save()
            
            link = f'http://localhost://5173/create-new-password/?otp={user.otp}&uuidb64={uuidb64}&refresh_token={refresh_token}'
            print("link====", link)
            
        return user 