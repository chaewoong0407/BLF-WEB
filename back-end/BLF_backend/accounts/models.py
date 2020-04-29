from django.db import models

from django.contrib.auth.models import User
# Create your models here.

class TerminalManager(User):
    region = models.CharField(max_length=30)

    class Meta:
        ordering = ('id',)
    