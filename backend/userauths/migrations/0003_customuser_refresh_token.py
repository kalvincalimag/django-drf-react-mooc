# Generated by Django 4.2.5 on 2024-08-21 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("userauths", "0002_alter_customuser_otp"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="refresh_token",
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
