## Authentication
[docs](https://www.django-rest-framework.org/api-guide/authentication/)
[GitHub](https://github.com/encode/django-rest-framework/blob/master/rest_framework/authentication.py)


## settings
```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'rest_framework.authtoken',
]

REST_FRAMEWORK = {
    # ...
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}
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


## BasicAuthentication
generally only appropriate for testing.

## SessionAuthentication
appropriate for AJAX clients that are running in the same 
session context as your website.

## TokenAuthentication
appropriate for client-server setups, 
such as native desktop and mobile clients.

## RemoteUserAuthentication
allows you to delegate authentication to your web server, 
which sets the REMOTE_USER environment variable.
