from django.urls import path
from .views import TitleContentAndContentSubjectList, ContentSubjectList, TitleContentList, ContentSubjectOne, TitleContentAll, ContentSubjectsAll

urlpatterns = [

    path('contentSubjectAndTitleSubject/', TitleContentAndContentSubjectList.as_view(), name='contentSubjectAndTitleSubject-list'),
    path('contentSubjectList/', ContentSubjectList.as_view(), name='contentSubjectList-list'),
    path('titleContentList/', TitleContentList.as_view(), name='titleContentList-list'),
    path('contentSubjectOne/', ContentSubjectOne.as_view(), name='contentSubjectOne'),
    path('titleContentAll/', TitleContentAll.as_view(), name='titleContentAll'),
    path('contentSubjectsAll/', ContentSubjectsAll.as_view(), name='contentSubjectsAll'),


]
