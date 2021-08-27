[docs](https://docs.wagtail.io/)

## start
```sh
python3 -m venv .venv \
    && source ./.venv/bin/activate \
    && pip install wagtail gunicorn \
    && wagtail start my_site \
    && code . \
    && cd my_site \
    && python manage.py migrate \
    && python manage.py createsuperuser --username asim
```



## Integrate
```sh
pip install wagtail
```



## Settings
```py

INSTALLED_APPS = [
    'home',
    'search',

    'wagtail.contrib.forms',
    'wagtail.contrib.redirects',
    'wagtail.embeds',
    'wagtail.sites',
    'wagtail.users',
    'wagtail.snippets',
    'wagtail.documents',
    'wagtail.images',
    'wagtail.search',
    'wagtail.admin',
    'wagtail.core',

    'modelcluster',
    'taggit',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]



MIDDLEWARE = [
    # ...

    'wagtail.contrib.redirects.middleware.RedirectMiddleware',
]


WAGTAIL_SITE_NAME = 'My Example Site'
```



## URL configuration
```py
from django.urls import path, include

urlpatterns = [
    # ...
    path('cms/', include('wagtail.admin.urls')),
    path('documents/', include('wagtail.documents.urls')),
    path('pages/', include('wagtail.core.urls')),
]
```
