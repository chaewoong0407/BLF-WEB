from django.db import models

# Create your models here.
class Report(models.Model):
    item_type = models.CharField(max_length=100)
    item_feature = models.CharField(max_length=200)
    bus_number = models.CharField(max_length=100)
    bus_region = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    created = models.DateTimeField(auto_now_add =True)

    class Meta:
        ordering= ['created'] 