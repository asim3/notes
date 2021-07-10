## templatet ags
`nano django_app/templatetags/__init__.py`
`nano django_app/templatetags/asim.py`
```py
from django import template
from django import template


register = template.Library()


@register.simple_tag(takes_context=True)
def replace_args(context, *args, **kwargs):
    print(context, args, kwargs)
    print("="*88)
    print(args)
    print("="*88)
    print(kwargs)
    return 55


# [{'True': True, 'False': False, 'None': None}, {'csrf_token': ..... (1, 2, 3) {'aa': 44}
# ========================================================================================
# (1, 2, 3)
# ========================================================================================
# {'aa': 44}


# {% load asim %}
# {% replace_args 1 2 3 aa=44 %}
# 55
```
