from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from contentSubjectHandle.models import TitleContent, ContentSubject
from .serializers import TitleContentSerializer, ContentSubjectSerializer

class TitleContentListCreate(generics.ListCreateAPIView):
    queryset = TitleContent.objects.all()
    serializer_class = TitleContentSerializer

class TitleContentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TitleContent.objects.all()
    serializer_class = TitleContentSerializer

class ContentSubjectListCreate(generics.ListCreateAPIView):
    queryset = ContentSubject.objects.all()
    serializer_class = ContentSubjectSerializer

class ContentSubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContentSubject.objects.all()
    serializer_class = ContentSubjectSerializer

class TitleContentAndContentSubjectList(APIView):
    def get(self, request):
        title_contents = TitleContent.objects.all()
        content_subjects = ContentSubject.objects.all()

        title_content_serializer = TitleContentSerializer(title_contents, many=True)
        content_subject_serializer = ContentSubjectSerializer(content_subjects, many=True)

        data = {
            'title_contents': title_content_serializer.data,
            'content_subjects': content_subject_serializer.data
        }
        return Response(data)