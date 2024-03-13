from rest_framework.viewsets import ModelViewSet
from .serializers import SubjectSerializer
from subject.models import Subject
# Create your views here.

class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer