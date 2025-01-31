# Generated by Django 4.2.5 on 2025-01-31 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_cartorderitem_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartorderitem',
            name='coupons',
        ),
        migrations.AddField(
            model_name='cartorderitem',
            name='coupons',
            field=models.ManyToManyField(blank=True, to='api.coupon'),
        ),
    ]
