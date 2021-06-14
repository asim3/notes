## Simple JWT
[docs](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
```python
pip install djangorestframework_simplejwt
```


## settings
```py
REST_FRAMEWORK = {
    # ...
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
```


## views
```python
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    # ...
    path('token/', TokenObtainPairView.as_view(), name='token-obtain'),
    path('refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
```


## only verify
```python
from rest_framework_simplejwt.views import TokenVerifyView


urlpatterns = [
    # ...
    path('verify/', TokenVerifyView.as_view(), name='token-verify'),
]
```


## obtain token
```txt
curl -X POST -H "Content-Type: application/json" \
  -d '{"username": "asim", "password": "my-password"}' \
  http://localhost:8000/api/token/
```
