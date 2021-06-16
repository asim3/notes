## Register
`nano views.py`
```py
from rest_framework.generics import CreateAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny


class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [AllowAny] # default
```


`nano serializers.py`
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
```


`nano urls.py`
```py
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
