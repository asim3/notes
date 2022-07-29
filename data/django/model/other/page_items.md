## models.py
```py
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.template.loader import render_to_string


class Page(models.Model):
    title = models.CharField(_("Page Title"), max_length=100)

    def __str__(self):
        return self.title

    def get_html(self):
        # self.set_item_order([1, 2, 3, 4, 5, 6, ])
        # self.set_item_order([5, 6, 2, 3, 4, 1, ])
        return render_to_string("root.html", context=self.get_context())

    def get_context(self):
        return {
            "page_title": self.title,
            "items": self.get_items(),
            "items_order": list(self.get_item_order()),
        }

    def get_items(self):
        return self.page_items.all()


class Item(models.Model):

    class TemplateType(models.TextChoices):
        Title = 'title.html', _('Title')
        LINK = 'link.html', _('Link')
        IMAGE = 'image.html', _('Image')
        PARAGRAPH = 'paragraph.html', _('Paragraph')
        FOOTER = 'footer.html', _('Footer')

    page = models.ForeignKey(
        Page,
        on_delete=models.CASCADE,
        related_name="page_items")
    template_type = models.CharField(
        _("Template Type"),
        max_length=20,
        choices=TemplateType.choices)
    text = models.TextField(_("Text"))

    class Meta:
        order_with_respect_to = 'page'
```


## views.py
```py
from django.shortcuts import HttpResponse
from .models import Page


def my_home(request, *args, **kwargs):
    p1, _ = Page.objects.get_or_create(title="My Views.py Title")
    return HttpResponse(p1.get_html())
```


## templates/root.html
```jinja
<!DOCTYPE html>
<html>

<head>
    <title>{{ page_title }}</title>
</head>

<body>
    
    {% for item in items %}
        
        {% include item.template_type with item_object=item %}

    {% endfor %}
    
    <h1>Order: {{ items_order }}</h1>
</body>

</html>
```


## templates/title.html
```jinja
<h1>{{ item_object.text }}</h1>
```


## templates/paragraph.html
```jinja
<p>{{ item_object.text }}</p>
```


## templates/link.html
```jinja
<a href="{{ item_object.text }}">{{ item_object.text }}</a>
```


## templates/image.html
```jinja
<img 
  src="{{ item_object.text }}" 
  alt="{{ item_object.text }}" 
  title="{{ item_object.text }}" 
  class="">
```
