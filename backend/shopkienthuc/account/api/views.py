from rest_framework.viewsets import ModelViewSet
from .serializers import StudentSerializer, TeacherSerializer
from account.models import Student, Teacher
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout

# ViewSets
class StudentAPIView(APIView):
    serializer_class = StudentSerializer
    
    def get(self, request):
        students = Student.objects.all()
        serializer = self.serializer_class(students, many=True)
        return Response(serializer.data)

    def post(self, request):
        print(request)
        serializer = self.serializer_class(data=request.data)
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        if serializer.is_valid():
            account_name = serializer.validated_data.get('accountName')
            password = serializer.validated_data.get('password')
            
            # Sử dụng authenticate để kiểm tra thông tin đăng nhập
            user = authenticate(request, accountName=account_name, password=password)
            
            if user:
                # Người dùng hợp lệ, tiếp tục xử lý và phản hồi
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key, 'accountName': account_name})
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)



class TeacherViewSet(ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

# Login and Logout Views
# class LoginView(APIView):
#     def post(self, request, format =None):
#         username = request.data.get('username')
#         password = request.data.get('password')
        # queryset
        # if user:
        #     login(request, user)
        #     token, created = Token.objects.get_or_create(user=user)
        #     return Response({'token': token.key, 'user_id': user.id})
        # else:
        #     return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({'message': 'Logout successful'})
