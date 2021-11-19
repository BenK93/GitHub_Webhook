from django.db import models

# Create your models here.


class Request(models.Model):
    id = models.BigIntegerField(unique=True, primary_key=True)
    number = models.IntegerField(unique=True)
    state = models.CharField(max_length=20)
    title = models.CharField(max_length=250)
    username = models.CharField(max_length=150)
    avatar = models.CharField(max_length=350)
    body = models.TextField()
    created_at = models.CharField(max_length=50)

    def __str__(self):
        return self.title
