## blocks
```py
from wagtail.core.blocks import StructBlock, CharBlock, TextBlock
from wagtail.images.blocks import ImageChooserBlock


class MyCardBlock(StructBlock):
    title = CharBlock(required=True, help_text="Add your title")
    text = TextBlock(required=True, help_text="Add additional text")
    my_image = ImageChooserBlock()

    class Meta:
        template = "my_home/card_block.html"
        icon = "edit"
        label = "My Card Label"
```


## template
`my_home/card_block.html`
```jinja
{% load wagtailimages_tags %}


{{ self.title }} <br>
{{ self.text }} <br>
{% image self.my_image width-350 format-jpeg %}
```


## model
```py
from django.db import models
from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.blocks import ImageChooserBlock

from .blocks import MyCardBlock


class HomePage(Page):
    my_name = models.CharField(max_length=255)
    my_body = StreamField([
        ("my_card", MyCardBlock()),
        ('heading', blocks.CharBlock(form_classname="full title")),
        ('paragraph', blocks.RichTextBlock()),
        ('image', ImageChooserBlock()),
    ],
    blank=True, null=True,)

    content_panels = Page.content_panels + [
        FieldPanel('my_name'),
        StreamFieldPanel('my_body'),
    ]
```



## template
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
