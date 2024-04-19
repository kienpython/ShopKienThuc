from rest_framework.views import APIView
from rest_framework.response import Response
from questions.models import Questions
from .serializers import QuestionsSerializer
from django.http import JsonResponse
from rest_framework import status

class QuestionsSubjectList(APIView):
    def get(self, request):
        idCS = request.query_params.get('idCS')
        if idCS:
            id_Subject = Questions.objects.filter(idContentSubject=idCS)
            questions_serializer = QuestionsSerializer(id_Subject, many=True)
            data = {
                'questions': questions_serializer.data
            }
            return Response(data)
        else:
            return Response(data={
                'content_subjects': "NULL"
            })

    def post(self, request):
        try:
            print(request.body.decode('utf-8'))
            return Response({'message': 'Data processed successfully'})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class QuestionsSubjectAll(APIView):
    def get(self, request):
        id_Subject = Questions.objects.all().order_by("idContentSubject")
        questions_serializer = QuestionsSerializer(id_Subject, many=True)
        data = {
            'questions': questions_serializer.data
        }
        return Response(data)
