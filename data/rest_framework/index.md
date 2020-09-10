## Django REST framework


## Install
```txt
pip install djangorestframework

# Markdown support for the browsable API.
pip install markdown       

# Filtering support
pip install django-filter  
```



## Add to INSTALLED_APPS
```py
INSTALLED_APPS = [
    ...
    'rest_framework',
    'rest_framework.authtoken'
]
```


##/app_name/urls.py
```py
from .routers import router
from rest_framework.authtoken.views import ObtainAuthToken

from django.contrib.auth.views import LoginView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

class UserLoginView(LoginView):
    template_name="index.html"
    
    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


urlpatterns = [
    ...
    path('api/', include(router.urls)),
    path('login/', UserLoginView.as_view()),
    path('api_auth_token/', ObtainAuthToken.as_view()),
]
```



## Pagination size
```py
REST_FRAMEWORK = {
    # ...

    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}
```



## Default renderer classes
```py
REST_FRAMEWORK = {
    # ...

    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
}
```


## Hierarchy
```text
include(router.urls)
|
└── router.register('url_path', UserViewSet)
     |
     └── UserViewSet
          |
          ├── queryset = User.objects.all()
          └── serializer_class = UserSerializer
              |
              ├── model = User
              └── fields = ['url', 'username']
```
