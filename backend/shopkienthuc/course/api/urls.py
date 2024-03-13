from rest_framework.routers import DefaultRouter
from .views import CourseViewSet

router = DefaultRouter()
router.register('course',CourseViewSet, basename= 'courseViewSet')
urlpatterns = router.urls
