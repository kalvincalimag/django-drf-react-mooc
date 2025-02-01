from django.contrib import admin
from userauths.models import CustomUser, Profile

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'date']

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ["id", "username", "email", "full_name"]

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Profile, ProfileAdmin)
