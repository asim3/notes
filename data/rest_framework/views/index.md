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


# Generics
`nano views.py`
```py
from django.contrib.auth.models import User
from rest_framework.generics import ListCreateAPIView

from .serializers import UserSerializer


class UserViewSet(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
```


`nano serializers.py`
```python
from rest_framework.serializers import HyperlinkedModelSerializer
from django.contrib.auth.models import User


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name']
        extra_kwargs = {'password': {'write_only': True}}
        depth = 1
```


`nano urls.py`
```py
from django.urls import path
from .views import UserViewSet


urlpatterns = [
    # ...
    path('users/', UserViewSet.as_view(), name='users_api'),
]
```
