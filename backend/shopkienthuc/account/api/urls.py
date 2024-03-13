from rest_framework.routers import DefaultRouter
from .views import StudentAPIView
from django.urls import path

urlpatterns = [
    path('studentsAccount/', StudentAPIView.as_view(), name='student-list'),
    # Thêm các URL patterns khác nếu cần
]
