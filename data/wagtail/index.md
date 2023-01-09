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

    # ...
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


## Add Site
```py
from wagtail.models import Site, Page

from .models import BlogPage


def add_new_site(site_name):
    root_page = Page.get_first_root_node()
    
    homepage = BlogPage(title=f"{site_name} Home")
    
    root_page.add_child(instance=homepage)
    
    Site.objects.create(
        hostname=f"{site_name}.localhost",
        site_name=f"{site_name} local host",
        root_page=homepage,
        is_default_site=False)
```
