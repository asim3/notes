## setup
CommandError: Can't find msguniq. Make sure you have GNU gettext tools 0.15 or newer installed.
```sh
sudo apt install gettext

# alpine
apk add gettext
```


## Steps
> 1- add Locale Middleware    
> 2- add LOCALE_PATHS    
> 3- add URL Patterns


## copy all messages
```txt
mkdir locale
python3 manage.py makemessages -l ar
python3 manage.py makemessages -l ar_sa
python3 manage.py makemessages -l en
python3 manage.py makemessages -l es
```


## Compile all messages
```txt
python3 manage.py compilemessages
```


## settings.py
> Important: add the middleware to auto redirect the root url to the active language 
```python
MIDDLEWARE = [
    # . . . 
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    # . . . 
]

LANGUAGE_CODE = 'ar-sa'

# LANGUAGES: used by i18n_patterns to determine the languages
LANGUAGES = [
    ('ar', _('Arabic')),
    ('ar-sa', _('Arabic')),
    ('en', _('English')),
]

LOCALE_PATHS = (
    BASE_DIR / 'locale',
)
```


## URLs
```py
from django.conf.urls.i18n import i18n_patterns


urlpatterns = i18n_patterns(
    # ...
    path('admin/', admin.site.urls),
)
```


## view.py
```python
from django.utils.translation import gettext_lazy as _

class MyThing(models.Model):
    name = models.CharField(help_text=_('This is the help text'))
```


## template tag
```django
{% load i18n %}

<title>{% translate "This is the title." %}</title>
<title>{% translate myvar %}</title>
```
