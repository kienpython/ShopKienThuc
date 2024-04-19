from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from contentSubjectHandle.models import TitleContent, ContentSubject
from .serializers import TitleContentSerializer, ContentSubjectSerializer
from subject.models import Subject


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
    
class ContentSubjectList(APIView):
    def get(self, request):
        name_Subject = request.query_params.get('nameSubject')
        id_Subject = Subject.objects.filter(nameSubject=name_Subject).values('idSubject').first()
        if id_Subject:
            content_subjects = ContentSubject.objects.filter(idSubject=id_Subject['idSubject'])
            content_subject_serializer = ContentSubjectSerializer(content_subjects, many=True)

            data = {
                'content_subjects': content_subject_serializer.data
            }
            return Response(data)
        else:
            return Response(data = {
                'content_subjects': "NULL"
            })

class ContentSubjectOne(APIView):
    def get(self, request):
        name_Subject = request.query_params.get('nameSubject')
        idCS = request.query_params.get('idCS')
        id_Subject = Subject.objects.filter(nameSubject=name_Subject).values('idSubject').first()
        if id_Subject:
            content_subjects = ContentSubject.objects.filter(idSubject=id_Subject['idSubject'], idContentSubject=idCS)
            content_subject_serializer = ContentSubjectSerializer(content_subjects, many=True)

            data = {
                'content_subjects': content_subject_serializer.data
            }
            return Response(data)
        else:
            return Response(data = {
                'content_subjects': "NULL"
            })
        
class ContentSubjectsAll(APIView):
    def get(self, request):
        
        contentSubjects = ContentSubject.objects.all().order_by("idTitleContent")
        contentSubject_serializer = ContentSubjectSerializer(contentSubjects, many=True)

        data = {
            'contents_subject': contentSubject_serializer.data,
        }
        return Response(data)
    
        
class TitleContentList(APIView):
    def get(self, request):
        name_Subject = request.query_params.get('nameSubject')
        id_Subject = Subject.objects.filter(nameSubject=name_Subject).values('idSubject').first()
        if id_Subject:
            title_contents = TitleContent.objects.filter(idSubject=id_Subject['idSubject'])
            title_content_serializer = TitleContentSerializer(title_contents, many=True)

            data = {
                 'title_contents': title_content_serializer.data,
            }
            return Response(data)
        else:
            return Response(data = {
                'title_contents': "NULL"
            })
        
class TitleContentAll(APIView):
    def get(self, request):
        
        title_contents = TitleContent.objects.all().order_by("idSubject")
        title_content_serializer = TitleContentSerializer(title_contents, many=True)

        data = {
            'title_contents': title_content_serializer.data,
        }
        return Response(data)
    
    