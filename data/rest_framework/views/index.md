## Views

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
