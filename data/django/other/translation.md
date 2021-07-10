## setup
CommandError: Can't find msguniq. Make sure you have GNU gettext tools 0.15 or newer installed.
```sh
sudo apt install gettext
```


## alpine
```dockerfile
RUN apk add --no-cache --update gettext
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


## format
```py
from django.utils.text import format_lazy
from django.utils.translation import gettext_lazy as _


format_lazy(_("Aaaa Bbbb cccc"), name="Asim", age=1234)
format_lazy(_("Aaaa {name} Bbbb cccc"), name="Asim", age=1234)
format_lazy(_("Aaaa {name} Bbbb {age} cccc"), name="Asim", age=1234)

# Error
format_lazy(_("Aaaa {name} Bbbb {age} cccc {time} dddd"), name="Asim", age=1234)
```


## Template tag
```django
{% load i18n %}

<title>{% trans "This is the title." %}</title>
<title>{% trans myvar %}</title>


<p>{% trans "Welcome to our page" %}</p>


{% get_current_language as LANGUAGE_CODE %}

<!-- Current language: {{ LANGUAGE_CODE }} -->


{% get_available_languages as languages %}

{% for lang_code, lang_name in languages %}
    {% language lang_code %}
        <a href="{% url 'category' slug=category.slug %}">{{ lang_name }}</a>
    {% endlanguage %}
{% endfor %}
```


## retrieve only
```django
{% load i18n %}

{% translate "starting point" as start %}
{% translate "end point" as end %}
{% translate "La Grande Boucle" as race %}

<h1>
  <a href="/" title="{% blocktranslate %}Back to '{{ race }}' homepage{% endblocktranslate %}">{{ race }}</a>
</h1>

<p>
    {% for stage in tour_stages %}
        {% cycle start end %}: {{ stage }}{% if forloop.counter|divisibleby:2 %}<br>{% else %}, {% endif %}
    {% endfor %}
</p>
```


## blocktranslate
[docs](https://docs.djangoproject.com/en/dev/topics/i18n/translation/#blocktranslate-template-tag)
```django
{% load i18n %}

{% blocktranslate %}This string will have {{ value }} inside.{% endblocktranslate %}
```
