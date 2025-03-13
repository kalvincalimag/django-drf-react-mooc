import random
from userauths.models import CustomUser, Profile
from django.shortcuts import render, redirect
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny 
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from api import serializers as api_serializers
from api import models as api_models
from decimal import Decimal
import stripe
import requests

stripe.api_key = settings.STRIPE_SECRET_KEY
PAYPAL_ACCOUNT_ID = settings.PAYPAL_CLIENT_ID
PAYPAL_SECRET_KEY = settings.PAYPAL_SECRET_KEY

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = api_serializers.MyTokenObtainPairSerializer
    

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = api_serializers.RegisterSerializer
    permission_classes = [AllowAny]
    
def generate_random_otp(length=7):
    digits = "0123456789"
    otp = ''.join(random.choice(digits) for _ in range(length))
    return otp
    
class PasswordResetEmailVerifyAPIView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = api_serializers.CustomUserSerializer

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
    serializer_class = api_serializers.CustomUserSerializer

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


class CategoryListAPIView(generics.ListAPIView):
    queryset = api_models.Category.objects.filter(active=True)
    serializer_class = api_serializers.CategorySerializer
    permission_classes = [AllowAny]


class CourseListAPIView(generics.ListAPIView):
    queryset = api_models.Course.objects.filter(
        submission_status="Published", 
        publishing_status="Published"
    )
    serializer_class = api_serializers.CourseSerializer
    permission_classes = [AllowAny]

class CourseDetailAPIView(generics.RetrieveAPIView):
    serializer_class = api_serializers.CourseSerializer
    
    def get_object(self):
        slug = self.kwargs['slug']
        course = api_models.Course.objects.get(
            slug=slug,         
            submission_status="Published", 
            publishing_status="Published"
        )
        
        return course

class CartAPIView(generics.CreateAPIView):
    queryset = api_models.Cart.objects.all()
    serializer_class = api_serializers.CartSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        course_id = request.data['course_id']
        user_id = request.data['user_id']
        price = request.data['price']
        country_name = request.data['country_name']
        cart_id = request.data['cart_id']
        
        course = api_models.Course.objects.filter(course_id=course_id).first()

        user = CustomUser.objects.filter(id=user_id).first() if user_id != 'undefined' else None

        try:
            country_obj = api_models.Country.objects.filter(name=country_name).first()
            country = country_obj.name
        except:
            country_obj = None
            country = "Philippines"

        tax_rate = country_obj.tax_rate / 100 if country_obj else 0
   
        cart = api_models.Cart.objects.filter(cart_id=cart_id, course=course).first()
        
        if cart:
            cart.course = course
            cart.user = user
            cart.price = price
            cart.tax_fee = Decimal(price) * Decimal(tax_rate)
            cart.country = country
            cart.cart_id = cart_id
            cart.total = Decimal(cart.price) + Decimal(cart.tax_fee)
            cart.save()
         
            return Response({"message": "Cart Updated Successfully."}, status=status.HTTP_200_OK)
        else: 
            cart = api_models.Cart()
            cart.course = course
            cart.user = user
            cart.price = price
            cart.tax_fee = Decimal(price) * Decimal(tax_rate)
            cart.country = country
            cart.cart_id = cart_id
            cart.total = Decimal(cart.price) + Decimal(cart.tax_fee)
            cart.save()
         
            return Response({"message": "Cart Created Successfully."}, status=status.HTTP_201_CREATED)

class CartListAPIView(generics.ListAPIView):
    serializer_class = api_serializers.CartSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        cart_id = self.kwargs['cart_id']
        queryset = api_models.Cart.objects.filter(cart_id=cart_id)
        return queryset


class CartItemDeleteAPIView(generics.DestroyAPIView):
    serializer_class = api_serializers.CartSerializer
    permission_classes = [AllowAny]
    
    def get_object(self):
        cart_id = self.kwargs['cart_id']
        item_id = self.kwargs['item_id']
        
        return api_models.Cart.objects.filter(cart_id=cart_id, id=item_id).first()
        
class CartStatsAPIView(generics.RetrieveAPIView):
    serializer_class = api_serializers.CartSerializer
    permission_classes = [AllowAny]
    lookup_field = 'cart_id'
    
    def get_queryset(self):
        cart_id = self.kwargs['cart_id']
        queryset = api_models.Cart.objects.filter(cart_id=cart_id)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        
        total_price = 0
        total_tax = 0
        total_total = 0
        
        for cart_item in queryset:
            total_tax += float(self.calculate_tax(cart_item))
            total_price += float(self.calculate_price(cart_item))
            total_total += round(float(self.calculate_total(cart_item)), 2)
            
        data = {
            "price": total_price,
            "tax": total_tax,
            "total": total_total
        }
        
        return Response(data)
            
    def calculate_price(self, cart_item):
        return cart_item.price

    def calculate_tax(self, cart_item):
        return cart_item.tax_fee

    def calculate_total(self, cart_item):
        return cart_item.total

class CreateOrderAPIView(generics.CreateAPIView):
    serializer_class = api_serializers.CartOrderSerializer
    permission_classes = [AllowAny]
    queryset = api_models.CartOrder.objects.all()
    
    def create(self, request, *args, **kwargs):
        full_name = request.data['full_name']
        email = request.data['email']
        country = request.data['country']
        cart_id = request.data['cart_id']
        user_id = request.data['user_id']

        user = api_models.CustomUser.objects.get(id=user_id) if user_id != 0 else None
        
        cart_items = api_models.Cart.objects.filter(cart_id=cart_id)
        
        total_price = Decimal(0.00)
        total_tax = Decimal(0.00)
        initial_total = Decimal(0.00)
        total_total = Decimal(0.00)
        
        order = api_models.CartOrder.objects.create(
            student = user,
            full_name = full_name,
            email = email,
            country = country
        )
        
        for item in cart_items:
            api_models.CartOrderItem.objects.create(
                order = order,
                course = item.course,
                teacher = item.course.teacher,
                price = item.course.price,
                tax_fee = item.tax_fee,
                total = item.total,
                initial_total = item.total
            )

            total_tax += Decimal(item.tax_fee)
            total_price += Decimal(item.price)
            initial_total += Decimal(item.total)
            total_total += Decimal(item.total)
            
            order.teachers.add(item.course.teacher)
            
        order.tax_fee = total_tax
        order.sub_total = total_price
        order.total = total_total
        order.initial_total = initial_total
        order.save()
        
        return Response({"message": "Order created Successfully"}, status=status.HTTP_201_CREATED)
            

class CheckoutAPIView(generics.RetrieveAPIView):
    queryset = api_models.CartOrder.objects.all()
    serializer_class = api_serializers.CartOrderSerializer
    permission_classes = [AllowAny]
    lookup_field = 'oid'


class CouponApplyAPIView(generics.CreateAPIView):
    serializer_class = api_serializers.CouponSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        order_oid = request.data['order_oid']
        coupon_code = request.data['coupon_code']
        
        order = api_models.CartOrder.objects.get(oid=order_oid)
        coupon = api_models.Coupon.objects.get(code=coupon_code)
        
        if coupon: 
            order_items = api_models.CartOrderItem.objects.filter(order=order, teacher=coupon.teacher)    
            for item in order_items:
                if not coupon in item.coupons.all():
                    
                    discount = item.total * coupon.discount / 100
                    
                    item.price -= discount
                    item.total -= discount
                    item.saved += discount
                    item.applied_coupon = True
                    item.coupons.add(coupon)
                                                                                
                    order.sub_total -= discount
                    order.total -= discount
                    order.saved += discount 
                    order.coupons.add(coupon)
                                        
                    item.save()
                    order.save()
                    
                    coupon.used_by.add(order.student)

                    return Response({"message": "Coupon Found and Applied"}, status=status.HTTP_201_CREATED)
                else:
                    return Response({"message": "Coupon Already Applied"}, status=status.HTTP_200_OK)

        else: 
            return Response({"message": "Coupon Not Found"}, status=status.HTTP_404_NOT_FOUND)
                    

class StripeCheckoutAPIView(generics.CreateAPIView):
    serializer_class = api_serializers.CartOrderSerializer
    permission_classes = [AllowAny]
    
    def create(self, reqeust, *args, **kwargs):
        order_oid = self.kwargs['order_oid']
        order = api_models.CartOrder.objects.get(oid=order_oid)
        
        if not order:
            return Response({"message": "Order Not Found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            checkout_session = stripe.checkout.Session.create(
                customer_email=order.email,
                payment_method_types=['card'],
                line_items=[
                    {
                        "price_data": {
                            "currency": "usd",
                            "product_data": {
                                "name": order.full_name,
                            },
                            # Convert total from dollars to cents for Stripe                            
                            "unit_amount": int(order.total * 100),
                        },
                        "quantity": 1,
                    }
                ],
                mode="payment",
                success_url=settings.FRONTEND_SITE_URL + '/payment-success/' + order.oid + '?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.FRONTEND_SITE_URL + '/payment-failed/'
            )
            order.stripe_session_id = checkout_session.id
            return redirect(checkout_session.url)
        except stripe.error.StripeError as e:
            return Response({"message": f"Something went wrong when trying to make payment. Error: {e}"})

def get_access_token(client_id, secret_key):
    token_url = 'https://api-m.sandbox.paypal.com/v1/oauth2/token'
    auth = (client_id, secret_key)
    data = {'grant_type': 'client_credentials'}
    response = requests.post(token_url, auth=auth, data=data)
    
    if response.status_code == requests.codes.ok:
        return response.json()['access_token']
    else:
        raise Exception(f"Error getting access token from Paypal {response.status_code}")

class PaymentSuccessAPIView(generics.CreateAPIView):
    queryset = api_models.CartOrder.objects.all()
    serializer_class = api_serializers.CartOrderSerializer
    
    def create(self, request, *args, **kwargs):
        order_oid = request.data['order_oid']
        session_id = request.data['session_id']
        paypal_order_id = request.data['paypal_order_id']
        
        order = api_models.CartOrder.objects.get(oid=order_oid)
        order_items = api_models.CartOrderItem.filter(order=order)
        
        # Paypal 
        if paypal_order_id != 'null':
            paypal_api_url = f'https://api-m.sandbox.paypal.com/v2/checkout/orders/{order_oid}'
            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {get_access_token(PAYPAL_ACCOUNT_ID, PAYPAL_SECRET_KEY)}'
            }
            response = requests.get(paypal_api_url, headers=headers)
            
            if response.status_code == requests.codes.ok:
                paypal_order_data = response.json()
                paypal_order_status = paypal_order_data['status']
                
                if paypal_order_status == 'COMPLETED':
                    if order.payment_status == 'Processing':
                        order.payment_status = 'Paid'
                        order.save()    
                        
                        api_models.Notification.objects.create(
                            user = order.student,
                            order = order,
                            type = 'Course Enrollment Completed',
                        )
                        
                        for o in order_items:
                            api_models.Notification.objects.create(
                                teacher = o.teacher,
                                order_item = o,
                                type = 'New Order',
                                order_item = o
                            )
                            api_models.EnrolledCourse.objects.create(
                                user = order.student,
                                teacher = o.teacher,
                                course = o.course,
                                order_item = o
                            )  
                        
                        return Response({'message': 'Payment successful. Thank you.'}, status=status.HTTP_200_OK)
                    else: 
                        return Response({'message': 'Payment has already been made. Thank you.'}, status=status.HTTP_200_OK)
                else: 
                    return Response({'message': 'Payment failed'}, status=status.HTTP_400_BAD_REQUEST)
            else: 
                return Response({'message': 'Error getting order details from Paypal'}, status=status.HTTP_502_BAD_GATEWAY)
        
        if session_id != 'null':
            response = stripe.checkout.Session.retrieve(session_id)
            
            if response['payment_status'] == 'paid':
                if order.payment_status == 'Processing':
                    order.payment_status = 'Paid'
                    order.save()
                    
                    api_models.Notification.objects.create(
                        user = order.student,
                        order = order,
                        type = 'Course Enrollment Completed',
                    )
                    
                    for o in order_items:
                        api_models.Notification.objects.create(
                            teacher = o.teacher,
                            order_item = o,
                            type = 'New Order',
                            order_item = o
                        )
                        api_models.EnrolledCourse.objects.create(
                            user = order.student,
                            teacher = o.teacher,
                            course = o.course,
                            order_item = o
                        )  
                    
                    return Response({'message': 'Payment successful. Thank you.'}, status=status.HTTP_200_OK)
                else: 
                    return Response({'message': 'Payment has already been made. Thank you.'}, status=status.HTTP_200_OK)
            else: 
                return Response({'message': 'Payment failed'}, status=status.HTTP_400_BAD_REQUEST)
