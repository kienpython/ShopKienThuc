from rest_framework.routers import DefaultRouter
from .views import StatisticsAPIViewAll, StatisticStudents,StatisticTeachers
from django.urls import path

urlpatterns = [
    path('statisticsAPIViewAll/', StatisticsAPIViewAll.as_view(), name='statisticsAPIViewAll'),
    path('statisticStudents/', StatisticStudents.as_view(), name='statisticStudents'),
    path('statisticTeachers/', StatisticTeachers.as_view(), name='statisticTeachers'),

    # Thêm các URL patterns khác nếu cần
]
