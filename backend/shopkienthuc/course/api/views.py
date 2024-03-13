from rest_framework.viewsets import ModelViewSet
from .serializers import CourseSerializer
from course.models import Course

# Create your views here.
class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

