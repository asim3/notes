## Django REST framework
[docs](https://www.django-rest-framework.org/)

## install
```txt
pip install djangorestframework
```


## Add to INSTALLED APPS
```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'rest_framework.authtoken',
]
```


## Obtain Auth Token
```py
from rest_framework.authtoken.views import ObtainAuthToken


urlpatterns = [
    # ...
    path('api_auth_token/', ObtainAuthToken.as_view()),
]
```
