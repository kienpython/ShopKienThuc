from rest_framework.routers import DefaultRouter
from .views import StudentAPIView,RegisterStudent
from django.urls import path

urlpatterns = [
    path('studentsAccount/', StudentAPIView.as_view(), name='student-list'),
    path('studentsAccount/post_dang_ky', RegisterStudent.as_view(), name='register-student'),

    # Thêm các URL patterns khác nếu cần
]
