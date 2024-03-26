from django.urls import path
from .views import TitleContentListCreate, TitleContentDetail, ContentSubjectListCreate, ContentSubjectDetail, TitleContentAndContentSubjectList

urlpatterns = [
    path('titlecontent/', TitleContentListCreate.as_view(), name='titlecontent-list'),
    path('titlecontent/<int:pk>/', TitleContentDetail.as_view(), name='titlecontent-detail'),
    path('contentsubject/', ContentSubjectListCreate.as_view(), name='contentsubject-list'),
    path('contentsubject/<int:pk>/', ContentSubjectDetail.as_view(), name='contentsubject-detail'),
    path('contentSubjectAndTitleSubject/', TitleContentAndContentSubjectList.as_view(), name='contentSubjectAndTitleSubject-list'),
]
