## Django REST framework
[docs](https://www.django-rest-framework.org/)
[status codes](https://www.django-rest-framework.org/api-guide/status-codes/)

## install
```txt
pip install djangorestframework
```


## settings
```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
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
    queryset = User.objects.all().order_by("date_joined")
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


## similarity
```py
rest_framework.views.APIView          # django.views.generic.View

rest_framework.generics.CreateAPIView # django.views.generic.CreateView
rest_framework.generics.UpdateAPIView # django.views.generic.UpdateView

rest_framework.viewsets.ModelViewSet  # CreateView, Update, Delete, ...

rest_framework.serializers.Serializer # django.forms.Form


rest_framework.routers.SimpleRouter ... [
    path("^users/$", name='user-list'),
    path("^users/{pk}/$", name='user-detail'),]


rest_framework.routers.DefaultRouter ... [
    path("^[.format]$", name='api-root'),
    path("^users/[.format]$", name='user-list'),
    path("^users/{pk}/[.format]$", name='user-detail'),]
```
