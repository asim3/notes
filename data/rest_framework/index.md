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
