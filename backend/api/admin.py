from django.contrib import admin
from api import models 

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'course_id', 'teacher', 'category', 'price', 'date')  # Add other fields you want to display
    fields = ('title', 'category', 'teacher', 'file', 'image', 'description', 'price', 'language', 'level', 'submission_status', 'publishing_status', 'featured', 'date')

admin.site.register(models.Teacher)
admin.site.register(models.Category)
admin.site.register(models.Course, CourseAdmin)
admin.site.register(models.Variant)
admin.site.register(models.VariantItem)
admin.site.register(models.Question_Answer)
admin.site.register(models.Question_Answer_Message)
admin.site.register(models.Cart)
admin.site.register(models.CartOrder)
admin.site.register(models.CartOrderItem)
admin.site.register(models.Certificate)
admin.site.register(models.CompletedLesson)
admin.site.register(models.EnrolledCourse)
admin.site.register(models.Note)
admin.site.register(models.Review)
admin.site.register(models.Notification)
admin.site.register(models.Coupon)
admin.site.register(models.Wishlist)
admin.site.register(models.Country)