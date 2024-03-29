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

    {% image page.my_image max-200x200 bgcolor-FFF format-jpeg %}

{% endblock %}
```



## Image as orderable
```py
from django.db import models
from wagtail.core.models import Page, Orderable
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.admin.edit_handlers import InlinePanel
from modelcluster.fields import ParentalKey


class HomePage(Page):
    content_panels = Page.content_panels + [
        InlinePanel("my_Images", label="My Images"),
    ]


class MyImages(Orderable):
    my_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+')

    page = ParentalKey(
        HomePage,
        on_delete=models.CASCADE,
        related_name="my_Images")

    panels = [
        ImageChooserPanel("my_image"),
    ]
```



## template
```jinja
{% extends "base.html" %}
{% load wagtailimages_tags %}


{% block content %}

    {% for row in page.my_Images.all %}

        {% image row.my_image max-200x200 bgcolor-FFF format-jpeg %} 
        
        <br />

    {% endfor %}

{% endblock %}
```
