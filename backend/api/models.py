from django.db import models
from userauths.models import CustomUser
from django.utils.text import slugify
from shortuuid.django_fields import ShortUUIDField
from django.utils import timezone

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
