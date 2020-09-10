## Authentication

`/app_name/settings.py`
```python
# https://github.com/encode/django-rest-framework/blob/master/rest_framework/authentication.py
REST_FRAMEWORK = {
    # ...

    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}
```


```text
BasicAuthentication:
   generally only appropriate for testing.

SessionAuthentication:
   appropriate for AJAX clients that are running in the same 
   session context as your website.

TokenAuthentication:
   appropriate for client-server setups, 
   such as native desktop and mobile clients.

RemoteUserAuthentication:
   allows you to delegate authentication to your web server, 
   which sets the REMOTE_USER environment variable.
```



[Simple JWT](https://github.com/davesque/django-rest-framework-simplejwt)


```python
pip install djangorestframework_simplejwt
```


```python
REST_FRAMEWORK = {
  'DEFAULT_AUTHENTICATION_CLASSES': (
    'rest_framework_simplejwt.authentication.JWTAuthentication',
  )
}
```



```python
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
  path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
```