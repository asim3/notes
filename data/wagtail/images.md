## model
```py
from django.db import models
from wagtail.core.models import Page
from wagtail.images.edit_handlers import ImageChooserPanel


class HomePage(Page):
    my_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        ImageChooserPanel('my_image'),
    ]
```



## template
```jinja
{% extends "base.html" %}
{% load wagtailimages_tags %}


{% block content %}

    {% image page.my_image width-350 format-jpeg %}

{% endblock %}
```

