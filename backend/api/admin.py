from django.contrib import admin
from api import models 

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'course_id', 'teacher', 'category', 'price', 'date') 
    fields = ('title', 'category', 'teacher', 'file', 'image', 'description', 'price', 'language', 'level', 'submission_status', 'publishing_status', 'featured', 'date', 'slug')


class CartAdmin(admin.ModelAdmin):
    list_display = ('cart_id', 'course', 'user', 'date', 'price', 'tax_fee', 'total', 'country')
    fields = ('course', 'user', 'date', 'price', 'tax_fee', 'total', 'country')


class TeacherAdmin(admin.ModelAdmin):
    list_display = ('user', 'image', 'full_name', 'bio', 'country')
    fields = ('user', 'image', 'full_name', 'bio', 'country', 'facebook', 'twitter', 'linkedin', 'about')


class WishlistAdmin(admin.ModelAdmin):
    list_display = ('user', 'course')
    fields = ('user', 'course')


class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'tax_rate', 'active')
    fields = ('name', 'tax_rate', 'active')


class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'teacher', 'order', 'order_item', 'review', 'type', 'seen', 'date')
    fields = ('user', 'teacher', 'order', 'order_item', 'review', 'type', 'seen', 'date')


class CouponAdmin(admin.ModelAdmin):
    list_display = ('teacher', 'code', 'discount', 'active', 'date')
    fields = ('used_by', 'teacher', 'code', 'discount', 'active', 'date')


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'rating', 'active', 'date')
    fields = ('user', 'course', 'rating', 'active', 'date')

    
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'date')
    fields = ('user', 'course', 'date')

    
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'slug', 'active')
    fields = ('title', 'image', 'slug', 'active')


class VariantAdmin(admin.ModelAdmin):
    list_display = ('course', 'title', 'date')
    fields = ('course', 'title', 'date')


class VariantItemAdmin(admin.ModelAdmin):
    list_display = ('variant', 'title', 'file', 'duration', 'content_duration', 'description', 'preview', 'date')
    fields = ('variant', 'title', 'file', 'duration', 'content_duration', 'description', 'preview', 'date')


class CartOrderAdmin(admin.ModelAdmin):
    list_display = ('student', 'total', 'saved', 'payment_status', 'full_name', 'email', 'date', 'country', 'stripe_session_id')
    fields = ('student', 'total', 'saved', 'payment_status', 'full_name', 'email', 'date', 'country', 'stripe_session_id')

    
class CartOrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'course', 'teacher', 'total', 'saved', 'applied_coupon', 'date')
    fields = ('order', 'course', 'teacher', 'total', 'saved', 'applied_coupon', 'date')

    
class QuestionAnswerAdmin(admin.ModelAdmin):
    list_display = ('course', 'user', 'date', 'title', 'qa_id')
    fields = ('course', 'user', 'date', 'title', 'qa_id')


class QuestionAnswerMessageAdmin(admin.ModelAdmin):
    list_display = ('course', 'user', 'qam_id', 'date')
    fields = ('course', 'user', 'qam_id', 'date')


class CompletedLessonAdmin(admin.ModelAdmin):
    list_display = ('course', 'user', 'variant_item', 'date')
    fields = ('course', 'user', 'variant_item', 'date')


class EnrolledCourseAdmin(admin.ModelAdmin):
    list_display = ('enrollment_id', 'order_item', 'course', 'user', 'teacher', 'date')
    fields = ('enrollment_id', 'order_item', 'course', 'user', 'teacher', 'date')


class NoteAdmin(admin.ModelAdmin):
    list_display = ('note_id', 'user', 'course', 'title', 'note', 'date')
    fields = ('note_id', 'user', 'course', 'title', 'note', 'date')
    

admin.site.register(models.Teacher, TeacherAdmin)
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Course, CourseAdmin)
admin.site.register(models.Variant, VariantAdmin)
admin.site.register(models.VariantItem, VariantItemAdmin)
admin.site.register(models.Question_Answer, QuestionAnswerAdmin)
admin.site.register(models.Question_Answer_Message, QuestionAnswerMessageAdmin)
admin.site.register(models.Cart, CartAdmin)
admin.site.register(models.CartOrder, CartOrderAdmin)
admin.site.register(models.CartOrderItem, CartOrderItemAdmin)
admin.site.register(models.Certificate, CertificateAdmin)
admin.site.register(models.CompletedLesson, CompletedLessonAdmin)
admin.site.register(models.EnrolledCourse, EnrolledCourseAdmin)
admin.site.register(models.Note, NoteAdmin)
admin.site.register(models.Review, ReviewAdmin)
admin.site.register(models.Notification, NotificationAdmin)
admin.site.register(models.Coupon, CouponAdmin)
admin.site.register(models.Wishlist, WishlistAdmin)
admin.site.register(models.Country, CountryAdmin)