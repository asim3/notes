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
