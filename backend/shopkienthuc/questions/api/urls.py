from django.urls import path
from .views import QuestionsSubjectList

urlpatterns = [

    path('questionsSubjectList/', QuestionsSubjectList.as_view(), name='QuestionsSubjectList-list'),

]
