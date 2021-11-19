from django.shortcuts import render
from rest_framework.views import APIView

from rest_framework.response import Response
from rest_framework import permissions, status
from .api.serializers import RequestSerializer
from .models import Request
# Create your views here.


class ReportView(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        newRequest = {}
        newRequest['id'] = request.data['pull_request']['id']
        newRequest['number'] = request.data['number']
        newRequest['title'] = request.data['pull_request']['title']
        newRequest['state'] = request.data['pull_request']['state']
        newRequest['username'] = request.data['pull_request']['user']['login']
        newRequest['avatar'] = request.data['pull_request']['user']['avatar_url']
        newRequest['body'] = request.data['pull_request']['body']
        newRequest['created_at'] = request.data['pull_request']['created_at']
        query = RequestSerializer(data=newRequest)
        if query.is_valid():
            query.save()
            return Response({}, status=status.HTTP_201_CREATED)
        elif query.errors['id']:
            exist = Request.objects.get(
                id=request.data['pull_request']['id'])
            exist.state = request.data['pull_request']['state']
            exist.title = request.data['pull_request']['title']
            exist.save()
            return Response({}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        all_requests = Request.objects.all()
        serialized = RequestSerializer(all_requests, many=True)
        if all_requests:
            return Response(serialized.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
