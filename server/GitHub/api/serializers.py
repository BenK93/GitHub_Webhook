from rest_framework import serializers
from GitHub.models import Request


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('id', 'number', 'title', 'state',
                  'username', 'avatar', 'body', 'created_at')
