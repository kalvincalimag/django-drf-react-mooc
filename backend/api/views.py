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