## Add new App
```sh
python manage.py startapp my_new_blog

# INSTALLED_APPS = ['my_new_blog',]
```


## models
```py
from django.db import models
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel


class BlogIndexPage(Page):
    """
    templates/my_new_blog/blog_index_page.html
    """
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro', classname="full")
    ]
```


## templates
`nano templates/my_new_blog/blog_index_page.html`
```py
{% extends "base.html" %}

{% load wagtailcore_tags %}

{% block body_class %}template-blogindexpage{% endblock %}

{% block content %}
    <h1>{{ page.title }}</h1>

    <hr>


    <div class="intro">{{ page.intro|richtext }}</div>


    {% for post in page.get_children %}
        <h2><a href="{% pageurl post %}">{{ post.title }}</a></h2>
        {{ post.specific.intro }}
        {{ post.specific.body|richtext }}
    {% endfor %}


{% endblock %}
```
