## StreamField
```py
from django.db import models
from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.blocks import ImageChooserBlock

from .blocks import MyCardBlock


class RegularPage(Page):
    template = "home/regular_page.html"
    my_name = models.CharField(max_length=255, null=True)
    my_body = StreamField([
        ("my_card", MyCardBlock()),
        ('heading', blocks.CharBlock(form_classname="full title")),
        ('paragraph', blocks.RichTextBlock()),
        ('image', ImageChooserBlock()),
    ], blank=True, null=True,)

    content_panels = Page.content_panels + [
        FieldPanel('my_name'),
        StreamFieldPanel('my_body'),
    ]
```



## template
`home/home_page.html`
```jinja
{% extends "base/base.html" %}
{% load static i18n wagtailcore_tags %}


{% block content %}

    {% include_block page.body %}

{% endblock %}
```



## OR
`home/home_page.html`
```jinja
{% extends "base.html" %}
{% load wagtailcore_tags wagtailimages_tags %}


{% block content %}

    {% for block in page.my_body %}

        {% if block.block_type == 'image' %}
        
            {% image block.value height-480 %}
        
        {% else %}
            
            {% include_block block %}
        
        {% endif %}

        <br />
    {% endfor %}

{% endblock content %}
```
