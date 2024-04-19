
from rest_framework.views import APIView
from rest_framework.response import Response
from statistic.models import Statistic
from .serializers import StatisticSerializer


class StatisticsAPIViewAll(APIView):
    def get(self, request):
        
        statistics = Statistic.objects.all().order_by("time")
        statistic_serializer = StatisticSerializer(statistics, many=True)

        data = {
            'statistics': statistic_serializer.data,
        }
        return Response(data)
    
class StatisticStudents(APIView):
    def get(self, request):
        
        statistics = Statistic.objects.filter(position="Student").order_by("-time")
        statistic_serializer = StatisticSerializer(statistics, many=True)
        return Response(statistic_serializer.data)
    
class StatisticTeachers(APIView):
    def get(self, request):
        statistics = Statistic.objects.filter(position="Teacher").order_by("-time")
        statistic_serializer = StatisticSerializer(statistics, many=True)
        return Response(statistic_serializer.data)