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
        try:
            data = request.data  # Sử dụng `request.data` để truy cập dữ liệu gửi kèm yêu cầu POST
            account_name = data.get("username")
            pass_word = data.get("password")
            student = Student.objects.get(accountName=account_name, password=pass_word)
            student_serializer = StudentSerializer(student)
            return Response(student_serializer.data)
        except Student.DoesNotExist:    
            return Response(False)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class RegisterStudent(APIView):
    def post(self, request):
        try:
            data = request.data
            name = data.get('name')
            accountName = data.get("username")
            emailAddress = data.get("email")
            password = data.get("password")
            activationCode = data.get('code')
            
            # Kiểm tra xem tài khoản đã tồn tại trong CSDL chưa
            if Student.objects.filter(accountName=accountName).exists():
                return Response({'error': 'Account name already exists'}, status=status.HTTP_400_BAD_REQUEST)
            
            # Tạo đối tượng Student mới và lưu vào CSDL
            new_student = Student(name=name, accountName=accountName, emailAddress=emailAddress, password=password, activationCode=activationCode)
            new_student.save()
            
            return Response({'success': 'Registered successfully'}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



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
