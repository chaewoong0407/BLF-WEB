from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs = {'password':{'write_only':True}}
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],validated_data['email'],validated_data['password']
        ) # create_user(username, email=None, password=None, **extra_fields)
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','password')

class LoginUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    class Meta:
        model = User
        fields = ('id','username','email','password')
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("제공된 인증서로 로그인이 안됩니다")
