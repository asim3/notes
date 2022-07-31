[Docs](https://django-debug-toolbar.readthedocs.io/en/latest/)


## install
```py
pip3 install django-debug-toolbar==3.2.4
```


## settings.py
```py
INSTALLED_APPS = [
    "debug_toolbar",
]

MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
    # ...
]

INTERNAL_IPS = ["127.0.0.1"]
```


## urls.py
```py
from django.urls import path, include

urlpatterns = [
    path('__debug__/', include('debug_toolbar.urls')),
]
```
