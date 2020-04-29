from rest_framework import serializers
from .models import TerminalManager
from django.contrib.auth import authenticate

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TerminalManager
        fields = ('id','username','email','password','region')
        extra_kwargs = {'password':{'write_only':True}}
    def create(self, validated_data):
        user = TerminalManager.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            region=validated_data['region']
        ) # create_user(username, email=None, password=None, **extra_fields)
        return user
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TerminalManager
        fields = ('id','email',)

class LoginUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField()
    class Meta:
        model = TerminalManager
        fields = ('id','email','password','region')
    def validate(self, data):
        
        if TerminalManager.objects.filter(email = data['email']).exists():
            return data
        raise serializers.ValidationError("제공된 인증서로 로그인이 안됩니다")
        