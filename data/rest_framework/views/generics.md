```py
from rest_framework.generics import (
    RetrieveAPIView,              #               Retrieve
    ListAPIView,                  #                        List 
    CreateAPIView,                # Create 
    ListCreateAPIView,            # Create                 List 
    UpdateAPIView,                #        Update
    RetrieveUpdateAPIView,        #        Update Retrieve
    RetrieveUpdateDestroyAPIView, #        Update Retrieve      Delete
    RetrieveDestroyAPIView,       #               Retrieve      Delete
    DestroyAPIView,               #                             Delete
)
```


```py
class RetrieveAPIView(mixins.RetrieveModelMixin,
                      GenericAPIView):


class ListCreateAPIView(mixins.ListModelMixin,
                        mixins.CreateModelMixin,
                        GenericAPIView):


class RetrieveUpdateDestroyAPIView(mixins.RetrieveModelMixin,
                                   mixins.UpdateModelMixin,
                                   mixins.DestroyModelMixin,
                                   GenericAPIView):
```


`url.py`
```py
from django.urls import path
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.generics import CreateAPIView


class MySerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=150)
    
    def create(self, validated_data):
        return User.objects.create(user=validated_data)


class MyView(CreateAPIView):
    serializer_class = MySerializer


urlpatterns = [
    # ...
    path('register/', MyView.as_view(), name="register"),
]
```


## override
```py
class MyView(CreateAPIView):
    queryset = None
    # OR
    def get_queryset(self):
        return self.queryset
    # OR
    def get_queryset(self):
        return (
            {"name": "test1", "app_type": "my-1-app"},
            {"name": "test1", "app_type": "my-2-app"},
        )

    lookup_field = 'pk'
    # OR
    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        return obj
```


## advance
```py
class MyView(APIView):
    serializer_class = MySerializer

    @classmethod
    def as_view(cls, **initkwargs):
        """
        Store the original class on the view function.
        This allows us to discover information about the view when we do URL
        reverse lookups.  Used for breadcrumb generation.
        """
        view = super().as_view(**initkwargs)
        view.cls = cls
        view.initkwargs = initkwargs

        # (session) based authentication is explicitly CSRF validated,
        # all other authentication is CSRF exempt.
        return csrf_exempt(view)

    # dispatch() -> initial() -> check_permissions()
    def check_permissions(self, request):
        for permission in self.get_permissions():
            if not permission.has_permission(request, self):
                self.permission_denied(
                    request,
                    message=getattr(permission, 'message', None),
                    code=getattr(permission, 'code', None)
                )

    def get_permissions(self):
        return [permission() for permission in self.permission_classes]
```


## auth & permissions
```py
from rest_framework.generics import ListCreateAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import MySerializer


class MyView(ListCreateAPIView):
    serializer_class = MySerializer
    
    authentication_classes = api_settings.DEFAULT_AUTHENTICATION_CLASSES
    permission_classes = api_settings.DEFAULT_PERMISSION_CLASSES
    
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.mymodel_set.all()
```
