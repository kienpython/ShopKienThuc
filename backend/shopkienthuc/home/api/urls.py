from rest_framework.routers import DefaultRouter
from .views import HomeViewSet

router = DefaultRouter()
router.register('',HomeViewSet, basename= 'homeViewSet')
urlpatterns = router.urls
