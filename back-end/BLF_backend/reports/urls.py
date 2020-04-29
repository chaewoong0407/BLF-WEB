from django.urls import path, include
from .views import CreateReportAPI, ReadReportAPI

urlpatterns = [
    path('create-report',CreateReportAPI.as_view()),
    path('read-report',ReadReportAPI.as_view()),
]
