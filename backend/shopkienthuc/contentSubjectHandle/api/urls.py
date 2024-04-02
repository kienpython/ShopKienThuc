from django.urls import path
from .views import TitleContentAndContentSubjectList, ContentSubjectList, TitleContentList, ContentSubjectOne

urlpatterns = [

    path('contentSubjectAndTitleSubject/', TitleContentAndContentSubjectList.as_view(), name='contentSubjectAndTitleSubject-list'),
    path('contentSubjectList/', ContentSubjectList.as_view(), name='contentSubjectList-list'),
    path('titleContentList/', TitleContentList.as_view(), name='titleContentList-list'),
    path('contentSubjectOne/', ContentSubjectOne.as_view(), name='contentSubjectOne'),
]
