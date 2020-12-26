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
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
        'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
        'rest_framework.permissions.IsAdminUser',
        'rest_framework.permissions.DjangoModelPermissions',
        'rest_framework.permissions.DjangoObjectPermissions',
    ),
}
```
> Make sure to run `manage.py migrate` after changing your settings. 
> The `rest_framework.authtoken` app provides Django database migrations.


## Register
```py
from rest_framework.serializers import (
    Serializer, CharField, EmailField, ReadOnlyField, ValidationError)
from django.contrib.auth.forms import UserCreationForm
from rest_framework.authtoken.models import Token


class RegisterSerializer(Serializer):
    username = CharField(max_length=150)
    password = CharField(max_length=150)
    token = ReadOnlyField()

    def validate(self, data):
        data['password1'] = data['password']
        data['password2'] = data['password']
        form = UserCreationForm(data)
        if not form.is_valid():
            raise ValidationError(form.errors)
        return data

    def create(self, validated_data):
        form = UserCreationForm(validated_data)
        if form.is_valid():
            user = form.save()
            token, created = Token.objects.get_or_create(user=user)
            return {
                'username': validated_data['username'],
                'password': '********',
                'token': token.key
            }
        else:
            raise ValidationError(form.errors)


# views.py
from rest_framework.generics import CreateAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny


class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [AllowAny] # default


# urls.py
from django.urls import path


urlpatterns = [
    # ...
    path('register/', RegisterView.as_view(), name="register"),
]
```


## Obtain Auth Token
```py
from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken


urlpatterns = [
    # ...
    path('login/', ObtainAuthToken.as_view(), name="login"),
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
