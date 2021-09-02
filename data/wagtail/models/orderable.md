## model
```py
from django.db import models
from wagtail.core.models import Page, Orderable
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel

from modelcluster.fields import ParentalKey


class HomePage(Page):
    content_panels = Page.content_panels + [
        InlinePanel("my_todo", label="My TODO's", min_num=3, max_num=5,),
    ]


class MyTodo(Orderable):
    name = models.CharField(max_length=30)
    page = ParentalKey(
        HomePage,
        on_delete=models.CASCADE,
        related_name="my_todo")

    panels = [
        FieldPanel("name"),
    ]
```

> `DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"` @ **`settings.py`**



## template
```jinja
{% extends "base.html" %}


{% block content %}

    {% for row in page.my_todo.all %}

        {{ row.name }} <br />

    {% endfor %}

{% endblock %}
```
