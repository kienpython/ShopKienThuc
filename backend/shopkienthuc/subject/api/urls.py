from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet

router = DefaultRouter()
router.register('subject', SubjectViewSet, basename = 'subjectViewSet')
urlpatterns = router.urls
