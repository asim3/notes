## Simple JWT
```python
pip install djangorestframework_simplejwt
```


[Simple JWT](https://github.com/davesque/django-rest-framework-simplejwt)


```python
REST_FRAMEWORK = {
  'DEFAULT_AUTHENTICATION_CLASSES': (
    'rest_framework_simplejwt.authentication.JWTAuthentication',
  )
}
```


## views
```python
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
  path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
```
