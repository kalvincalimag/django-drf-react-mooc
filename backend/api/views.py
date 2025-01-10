import random
from userauths.models import CustomUser, Profile
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny 
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from api.serializers import MyTokenObtainPairSerializer, CustomUserSerializer
from api.serializers import RegisterSerializer

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
            
            link = f'http://localhost/5173/create-new-password/?otp={user.otp}&uuidb64={uuidb64}&refresh_token={refresh_token}'

            context = {
                "link": link, 
                "username": user.username
            }

            subject = "Password Reset Email"
            text_body = render_to_string("email/password_reset.txt", context)
            html_body = render_to_string("email/password_reset.html", context)

            msg = EmailMultiAlternatives (
                subject=subject, 
                from_email=settings.FROM_EMAIL,
                to=[user.email],
                body=text_body
            )
            
            msg.attach_alternative(html_body, "text/html")
            msg.send()
                       
            print("link====", link)
            
        return user 

class PasswordChangeAPIView(generics.CreateAPIView):
    permission_classes = [AllowAny] 
    serializer_class = CustomUserSerializer

    def create(self, request, *args, **kwargs):        
        otp = request.data['otp']
        uuidb64 = request.data['uuidb64']
        password = request.data['password']
        
        user = CustomUser.objects.get(id=uuidb64, otp=otp)
        
        if user:
            user.set_password(password)
            # user.otp = ""
            user.save()
            
            return Response({"message": "Password Changed Successfully."}, status=status.HTTP_201_CREATED)
        else: 
            return Response({"message": "User does not exist.."}, status=status.HTTP_404_NOT_FOUND)
