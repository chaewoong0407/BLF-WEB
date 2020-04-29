from rest_framework import serializers
from .models import Report

class CreateReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        exclude = ['created']

class ReadReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'