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

    lookup_field = 'pk'
    # OR
    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        return obj

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

        # Note: session based authentication is explicitly CSRF validated,
        # all other authentication is CSRF exempt.
        return csrf_exempt(view)
```
