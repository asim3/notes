## copy all messages
```txt
mkdir locale
python3 manage.py makemessages -l ar
python3 manage.py makemessages -l en
python3 manage.py makemessages -l es
```


## view.py
```python
from django.utils.translation import gettext_lazy as _

class MyThing(models.Model):
    name = models.CharField(help_text=_('This is the help text'))
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

LANGUAGE_CODE = 'ar'

LANGUAGES = [
    ('ar', _('Arabic')),
    ('en', _('English')),
]

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)
```


## Compile all messages
```txt
python3 manage.py compilemessages
```


## template tag
```django
{% load i18n %}

<title>{% translate "This is the title." %}</title>
<title>{% translate myvar %}</title>
```
