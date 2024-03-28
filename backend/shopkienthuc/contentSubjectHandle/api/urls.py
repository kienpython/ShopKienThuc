from django.urls import path
from .views import TitleContentAndContentSubjectList, ContentSubjectList, TitleContentList

urlpatterns = [

    path('contentSubjectAndTitleSubject/', TitleContentAndContentSubjectList.as_view(), name='contentSubjectAndTitleSubject-list'),
    path('contentSubjectList/', ContentSubjectList.as_view(), name='contentSubjectList-list'),
    path('titleContentList/', TitleContentList.as_view(), name='titleContentList-list'),

]
