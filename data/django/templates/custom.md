## template tags

`nano django_app/templatetags/__init__.py`
`nano django_app/templatetags/custom_tags.py`
```py
from django import template

def get_key(context, key):
    if type(context) == dict:
        return context.get(key, "")
    return ""


register = template.Library()
register.filter('get_key', get_key)
```


## template
```jinja
{% load i18n custom_tags %}


{{ students_gpa|get_key:student.id }}
```
