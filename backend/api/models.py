from django.db import models
from userauths.models import CustomUser, Profile
from django.utils.text import slugify
from shortuuid.django_fields import ShortUUIDField
from django.utils import timezone
from django.db.models import Avg
from moviepy.editor import VideoFileClip
import math

LANGUAGE = (
    ('English','English'),
    ('Spanish', 'Spanish'),
    ('French', 'French'),
    ('Filipino', 'Filipino')
)

LEVEL = (
    ('Beginner', 'Beginner'),
    ('Intermediate', 'Intermediate'),
    ('Advanced', 'Advanced'),
)

COURSE_SUBMISSION_STATUS = (
    ('Draft', 'Draft'),
    ('Disabled', 'Disabled'),
    ('Published', 'Published'),
)

COURSE_PUBLISHING_STATUS = (
    ('Draft', 'Draft'),
    ('Review', 'Review'),
    ('Rejected', 'Rejected'),
    ('Disabed', 'Disabled'),
    ('Published', 'Published'),
)

PAYMENT_STATUS = (
    ('Paid', 'Paid'),
    ('Processing', 'Processing'),
    ('Failed', 'Failed'),
)

class Teacher(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    image = models.FileField(upload_to="course-file", null=True, blank=True, default='default-user.jpg')
    full_name = models.CharField(max_length=100)
    bio = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    facebook = models.URLField(null=True, blank=True)
    twitter = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.full_name
    
    def students(self):
        return CartOrderItem.objects.filter(teacher=self)
    
    def courses(self):
        return Course.objects.filter(teacher=self)
    
    def reviews(self):
        return Course.objects.filter(teacher=self).count()


class Category(models.Model):
    title = models.CharField(max_length=100)
    image = models.FileField(upload_to="category-file", null=True, blank=True, default='default-category.jpg')
    slug = models.SlugField(unique=True, blank=True, null=True)
    
    class Meta: 
        verbose_name_plural = "Category"
        ordering = ['title']
        
    def __str__(self):
        return self.title
    
    def course_count(self):
        return Course.objects.filter(category=self).count()
    
    def save(self, *args, **kwargs):
        if self.slug == "" or self.slug == None:
            self.slug = slugify(self.title)
        super(Category, self).save(*args, **kwargs)


class Course(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True)
    file = models.FileField(upload_to="course-file", null=True, blank=True)
    image = models.FileField(upload_to="course-file", null=True, blank=True, default='default-course.jpg')
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    slug = models.SlugField(unique=True, blank=True, null=True)
    language =  models.CharField(max_length=40, choices=LANGUAGE, default='English')
    level = models.CharField(max_length=40, choices=LEVEL, default='Beginner')
    submission_status = models.CharField(max_length=40, choices=COURSE_SUBMISSION_STATUS, default='Draft')
    publishing_status = models.CharField(max_length=40, choices=COURSE_PUBLISHING_STATUS, default='Draft')
    featured = models.BooleanField(default=False)
    course_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    date = models.DateTimeField(default=timezone.now())
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if self.slug == "" or self.slug == None:
            self.slug == slugify(self.title)
        super(Course, self).save(*args, **kwargs)

    def students(self):
        return EnrolledCourse.objects.filter(course=self)
    
    def curriculum(self):
        return VariantItem.objects.filter(variant__course=self)
    
    def lectures(self):
        return VariantItem.objects.filter(variant__course=self)
    
    def average_rating(self):
        average_rating = Review.objects.filter(course=self).aggregate(avg_rating=Avg('rating'))
        return average_rating['avg_rating']
    
    def rating_count(self):
        return Review.objects.filter(course=self).count()
    
    def reviews(self):
        return Review.objects.filter(course=self, active=True)
    

class Variant(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=1000) 
    variant_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    date = models.DateTimeField(default=timezone.now())
    
    def __str__(self):
        return self.title
    
    def variant_items(self):
        return VariantItem.objects.filter()


class VariantItem(models.Model):
    variant = models.ForeignKey(Variant, on_delete=models.CASCADE)
    title = models.CharField(max_length=1000)
    file = models.FileField(upload_to="variant-file")
    duration = models.DurationField(null=True, blank=True)
    content_duration = models.CharField(max_length=1000, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    preview = models.BooleanField(default=False)
    variant_item_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    date = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return f"{self.variant.title} - {self.title}"
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        if self.file:
            clip = VideoFileClip(self.file.path)
            duration_seconds = clip.duration
            
            minutes, remainder = divmod(duration_seconds, 60)
            minutes = math.floor(minutes)
            seconds = math.floor(remainder)
            
            duration_text = f"{minutes}m {seconds}s"
            
            self.content_duration = duration_text
            super().save(updated_fields=['content_duration'])

   
class Question_Answer(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateTimeField(default=timezone.now())
    title = models.CharField(max_length=1000, null=True, blank=True)
    qa_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    
    class Meta:
        ordering = ["-date"]
        
    def messages(self):
        return Question_Answer_Message.objects.filter(question=self)
    
    def profile(self):
        return Profile.objects.get(user=self.user)
    
    def __str__(self):
        return f"{self.course.title} - {self.title}"


class Question_Answer_Message(models.Model):
    question = models.ForeignKey(Question_Answer, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    qam_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    date = models.DateTimeField(default=timezone.now())
    
    class Meta: 
        ordering = ["date"]
    
    def profile(self):
        return Profile.objects.get(user=self.user)
    
    def __str__(self):
        return f"{self.user.username} - {self.question.title}"


class Cart(models.Model):
    cart_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now())
    price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    tax_fee = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    country = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return self.course.title


class CartOrder(models.Model):
    oid = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    student = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    teachers = models.ManyToManyField(Teacher, blank=True)  
    sub_total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    tax_fee = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    initial_total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    saved = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    payment_status = models.CharField(max_length=100, choices=PAYMENT_STATUS, default='Processing')
    full_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    date = models.DateTimeField(default=timezone.now())
    country = models.CharField(max_length=100, null=True, blank=True)
    coupons = models.ManyToManyField("api.Coupon", blank=True)
    stripe_session_id = models.CharField(max_length=1000, null=True, blank=True)

    class Meta: 
        ordering = ["-date"]

    def order_items(self):
        return CartOrderItem.objects.filter(order=self)

    def __str__(self):
        return self.oid


class CartOrderItem(models.Model):
    oid = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    order = models.ForeignKey(CartOrder, on_delete=models.CASCADE, related_name="orderitem")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="order_item")
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    tax_fee = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    initial_total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    saved = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    coupons = models.ForeignKey("api.Coupon", on_delete=models.SET_NULL, null=True, blank=True)
    applied_coupon = models.BooleanField(default=False)
    date = models.DateTimeField(default=timezone.now())

    class Meta: 
        ordering = ["-date"]

    def order_id(self):
        return f"Order ID #{self.order.oid}"

    def payment_status(self):
        return f"{self.order.payment_status}"

    def __str__(self):
        return self.oid


class Certificate(models.Model):
    certificate_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateTimeField(default=timezone.now())
    
    def __str__(self):
        return self.course.title


class CompletedLesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    variant_item = models.ForeignKey(VariantItem, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now())
    
    def __str__(self):
        return self.course.title


class EnrolledCourse(models.Model):
    enrollment_id = ShortUUIDField(unique=True, editable=False, length=6, max_length=20, alphabet="1234567890")
    order_item = models.ForeignKey(CartOrderItem, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now())
    
    def lectures(self):
        return VariantItem.objects.filter(variant__course=self.course)
    
    def completed_lessons(self):
        return CompletedLesson.objects.filter(course=self.course, user=self.user)
    
    def curriculum(self):
        return Variant.objects.filter(course=self.course)
    
    def notes(self):
        return Note.objects.filter(course=self.course, user=self.user)
    
    def question_answer(self):
        return Question_Answer.objects.filter(course=self.course)
    
    def review(self):
        return Review.objects.filter(course=self.course, user=self.user).first()
    
    def __str__(self):
        return self.course.title


