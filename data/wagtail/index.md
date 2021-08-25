[docs](https://docs.wagtail.io/)

## start
```sh
python3 -m venv .venv \
    && source ./.venv/bin/activate \
    && pip install wagtail gunicorn \
    && wagtail start my_site \
    && code my_site \
    && cd my_site \
    && python manage.py migrate \
    && python manage.py createsuperuser --username asim
```


## Home Page
`my_site/home/models.py`
```py
from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]
```


## Home Page Template
`templates/home/home_page.html`
```jinja
{% extends "base.html" %}

{% load wagtailcore_tags %}

{% block body_class %}template-homepage{% endblock %}

{% block content %}
    {{ page.body|richtext }}
{% endblock %}
```
