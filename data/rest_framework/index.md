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
    'rest_framework.authtoken',
]
```
> Make sure to run `manage.py migrate` after changing your settings. 
> The `rest_framework.authtoken` app provides Django database migrations.


## Obtain Auth Token
```py
from rest_framework.authtoken.views import ObtainAuthToken


urlpatterns = [
    # ...
    path('api_auth_token/', ObtainAuthToken.as_view()),
]
```
