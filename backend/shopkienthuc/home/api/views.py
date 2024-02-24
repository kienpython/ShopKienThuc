from rest_framework.viewsets import ModelViewSet
from .serializers import HomeSerializer
from home.models import Home

# Create your views here.
class HomeViewSet(ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer