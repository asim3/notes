[Simple JWT docs](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)

## install
```bash
pip install djangorestframework-simplejwt
```


## settings
> Make sure to run `manage.py migrate` after changing your settings.
```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'rest_framework_simplejwt',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # ...
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```


# Sinup
`nano views.py`
```py
from rest_framework.generics import CreateAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny

from .serializers import RegisterSerializer


class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [AllowAny]  # default
```


`nano serializers.py`
```py
from rest_framework.serializers import Serializer, CharField, ReadOnlyField, ValidationError
from django.contrib.auth.forms import UserCreationForm
from rest_framework_simplejwt.tokens import RefreshToken


class RegisterSerializer(Serializer):
    username = CharField(max_length=150)
    password2 = CharField(max_length=150)
    refresh = ReadOnlyField()
    token = ReadOnlyField()

    def validate(self, data):
        data['password1'] = data['password2']
        form = UserCreationForm(data)
        if not form.is_valid():
            raise ValidationError(form.errors)
        return data

    def create(self, validated_data):
        form = UserCreationForm(validated_data)
        if form.is_valid():
            user = form.save()
            refresh = RefreshToken.for_user(user)
            return {
                'username': validated_data['username'],
                'password2': '********',
                'refresh': str(refresh),
                'token': str(refresh.access_token),
            }
        raise ValidationError(form.errors)
```


# Login
`nano url.py`
```python
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    # ...
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
```


## only verify
```python
from rest_framework_simplejwt.views import TokenVerifyView


urlpatterns = [
    # ...
    path('verify/', TokenVerifyView.as_view(), name='token_verify'),
]
```


## get token value
```py
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework_simplejwt.exceptions import TokenError


user = User.objects.create(username='my-user')


refresh = RefreshToken.for_user(user)
refresh.get("user_id")
# 1

token_refresh = str(refresh)
# eyJ0eXAi.Nlcl9pZCI6MX0.L5OuS2nXvzyKit
token_access = str(refresh.access_token)
# eyJ0eXAi.iwidXNlclCI6M.KoghCL7rz96qwF


refresh_verify = RefreshToken(token_refresh)
refresh_verify.get("user_id")
# 1

access_verify = AccessToken(token_access)
access_verify.get("user_id")
# 1

AccessToken("eyJ0eX.dXNlclCI.ghCL7rz96q")
# raise TokenError(_("Token is invalid or expired"))
```
