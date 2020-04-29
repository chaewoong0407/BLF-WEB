from rest_framework import viewsets, generics, status
from rest_framework.response import Response
import jwt
from BLF_backend.settings import SECRET_KEY, ALGORITHM
from .models import Report
from django.core.serializers import serialize
import json

class CreateReportAPI(generics.GenericAPIView):
    
    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        report = serializer.save()
        return Response(
            {
                'report':CreateReportSerializer(
                    report).data
            }
        )

class ReadReportAPI(generics.GenericAPIView):

    def get(self, request, *args,**kargs):
        try:
            decoded = jwt.decode(self.request.headers['Authorization'],SECRET_KEY,ALGORITHM)
        except:
            content = {'message':'invalid token'}
            return Response(content, status = status.HTTP_403_FORBIDDEN)
        report = Report.objects.filter(bus_region = decoded['user']['region'])
        report_json = []
        
        for row in report:
            report_json.append(row)
        report = json.loads(serialize('json',report))
        print(report)
        return Response(
            {
                'reports': report,
            }
        )
