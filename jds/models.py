from __future__ import unicode_literals

from django.db import models

# Create your models here.
class JD(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    salaryFrom = models.IntegerField(default=0)
    salaryTo = models.IntegerField(default=0)
    location = models.CharField(max_length=50)
