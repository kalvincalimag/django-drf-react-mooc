# Generated by Django 4.2.5 on 2024-08-21 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("userauths", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="otp",
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
