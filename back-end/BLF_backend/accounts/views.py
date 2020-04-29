from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import TerminalManager
import json
from knox.models import AuthToken # 삭제 예정
import jwt
from django.core import serializers
from BLF_backend.settings import SECRET_KEY
from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer
# Create your views here.



class RegistrationAPI(generics.GenericAPIView ):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        json_data = json.loads(request.body)
        if TerminalManager.objects.filter(email = json_data['email']).exists():
            content = {'error' : 'already exist account'}
            return Response(content, status = status.HTTP_403_FORBIDDEN )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        # Serializer 생성
        
        token = jwt.encode(json_data, SECRET_KEY, algorithm="HS256")
       
        #token 생성
        return Response(
            {
                'user':UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
                'token': token,
            }
        )

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer
    def post(self, request, *args, **kwargs):
        data = TerminalManager.objects.filter(
            email = request.data['email']
            ).values('id','region','email','password')
        print(data)

        if data[0]['password'] != request.data['password']:
            content = {'message':'invalid password'}
            return Response(content,status = status.HTTP_403_FORBIDDEN)

        json_data = {'user':None}
        for row in list(data):
            json_data = {'user':row}
        print(json_data)
        token = jwt.encode(json_data, SECRET_KEY, algorithm="HS256")
        return Response(
            {
                'user': json_data['user'],
                'token': token,
            }
        )


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user