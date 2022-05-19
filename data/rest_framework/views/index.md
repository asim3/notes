# ViewSet
`nano views.py`
```py
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from .serializers import UserSerializer

class UserViewSet(ViewSet):

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)
```


`nano serializers.py`
```py
from rest_framework.serializers import Serializer, CharField

class UserSerializer(Serializer):
    username = CharField(max_length=200)
    password = CharField(max_length=200)
    first_name = CharField(max_length=200)
```


`nano urls.py`
```py
from django.urls import path
from .views import UserViewSet


urlpatterns = [
    path('users/', UserViewSet.as_view({'get': 'list'}), name='users_list'),
    path('users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve'}), name='users_info'),
]
```


## 2021
```py
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from django.contrib.auth.models import User

from .serializers import MySerializer


class MyViewSet(ViewSet):

    # get reverse("user-list")
    def list(self, request):
        queryset = User.objects.all()
        serializer = MySerializer(queryset, many=True)
        return Response(serializer.data)

    # post reverse("user-detail", kwargs={"pk": user.pk})
    def retrieve(self, request, pk=None):
        try:
            queryset = User.objects.get(pk=pk)
            serializer = MySerializer(queryset)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response(
                {"id": ["The requested resource could not be found."]}, status=404)

    # post reverse("user-list")
    def create(self, request):
        serializer = MySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(request.user)
            return Response(serializer.data, status=201)

    # put reverse("user-detail", kwargs={"pk": user.pk})
    def update(self, request, pk=None):
        try:
            queryset = User.objects.get(pk=pk)
            serializer = MySerializer(
                instance=queryset, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(request.user)
                return Response(serializer.data, status=204)
        except User.DoesNotExist:
            return Response(
                {"id": ["The requested resource could not be found."]}, status=404)

    # patch reverse("user-detail", kwargs={"pk": user.pk})
    def partial_update(self, request, pk=None):
        return self.update(request, pk=pk)

    # delete reverse("user-detail", kwargs={"pk": user.pk})
    def destroy(self, request, pk=None):
        try:
            instance = User.objects.get(pk=pk)
            instance.delete()
            return Response({}, status=202)
        except User.DoesNotExist:
            return Response(
                {"id": ["The requested resource could not be found."]}, status=404)
```
