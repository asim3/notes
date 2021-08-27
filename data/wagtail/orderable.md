## model
```py
from django.db import models
from wagtail.core.models import Page, Orderable
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel

from modelcluster.fields import ParentalKey


class HomePage(Page):
    content_panels = Page.content_panels + [
        InlinePanel("my_todo", label="My TODO's"),
    ]


class MyTodo(Orderable):
    id = models.AutoField(primary_key=True)
    # id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30)
    page = ParentalKey(
        HomePage,
        on_delete=models.CASCADE,
        related_name="my_todo")

    panels = [
        FieldPanel("name"),
    ]
```



## template
```jinja
{% extends "base.html" %}


{% block content %}

    {% for row in page.my_todo.all %}

        {{ row.name }} <br />

    {% endfor %}

{% endblock %}
```
