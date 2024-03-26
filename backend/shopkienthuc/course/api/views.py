from .serializers import CourseSerializer
from course.models import Course
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CourseAPIView(APIView):
    serializer_class = CourseSerializer
    
    def get(self, request):
        # Trích xuất giá trị nameCourse từ yêu cầu của client
        id_course = request.query_params.get('idCourse')
        
        if id_course is not None:
            # Nếu nameCourse được cung cấp, lọc queryset theo nameCourse
            queryset = Course.objects.filter(idCourse=id_course)
        else:
            # Nếu không có nameCourse, lấy toàn bộ queryset
            queryset = Course.objects.all()
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)