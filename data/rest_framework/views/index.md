## Views


## views.py
```python
from django.contrib.auth.models import User, Group
from rest_framework.viewsets import ModelViewSet
from rest_framework.viewsets import (
    ViewSet, ModelViewSet, GenericViewSet, ReadOnlyModelViewSet,)

from .serializers import UserSerializer, GroupSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class GroupViewSet(ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
```



```python
from rest_framework.mixins import (CreateModelMixin, RetrieveModelMixin, 
    UpdateModelMixin, DestroyModelMixin, ListModelMixin)

class ModelViewSet(CreateModelMixin,
                   RetrieveModelMixin,
                   UpdateModelMixin,
                   DestroyModelMixin,
                   ListModelMixin,
                   GenericViewSet):

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        ...
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        ...
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        ...
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        ...
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        ...
        return Response(status=status.HTTP_204_NO_CONTENT)
```


```python
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.models import User
from alzod.permissions import ReadOnly
from .serializers import AuthSerializer

class AuthUserView(ReadOnlyModelViewSet):
    permission_classes = (ReadOnly,)
    serializer_class = AuthSerializer
    queryset = User.objects.all()
    
    def get_object(self):
        print("\n\n\nnnnn\n\n\n")
        return User.objects.first()

    def list(self, request, *args, **kwargs):
        queryset = self.get_object()
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
```
