## models.py
```py
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.template.loader import render_to_string


class Page(models.Model):

    class TemplateType(models.TextChoices):
        LANDING = 'landing.html', _('Landing')
        ARTICLE = 'article.html', _('Article')
        GALLERY = 'gallery.html', _('Gallery')
        CART = 'cart.html', _('Cart')

    title = models.CharField(_("Page Title"), max_length=100)
    template_type = models.CharField(
        _("Template Type"),
        max_length=20,
        default=TemplateType.LANDING,
        choices=TemplateType.choices)
    parent_page = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="descendants")

    class Meta:
        order_with_respect_to = 'parent_page'

    def __str__(self):
        return self.title

    def get_html(self):
        # self.set_item_order([1, 2, 3, 4, 5, 6, ])
        self.set_item_order([5, 6, 2, 3, 4, 1, ])
        return render_to_string(self.template_type, context=self.get_context())

    def get_context(self):
        return {
            "object": self,
            "navigation": self.descendants.all(),
            "items": self.page_items.all(),
            "navigation_order": self.get_page_order(),
            "items_order": self.get_item_order(),
        }


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


def my_home(request, page=None, *args, **kwargs):
    if page:
        p1 = Page.objects.get(id=page)
    else:
        p1, _ = Page.objects.get_or_create(title="My Views.py Title")
    return HttpResponse(p1.get_html())
```


## templates/landing.html
```jinja
<!DOCTYPE html>
<html>

<head>
    <title>{{ object.title }}</title>
    <link rel="icon" href="demo_icon.gif" type="image/gif" sizes="16x16">
</head>

<body>

    <nav>

        {% if object.parent_page.id %}
            <a href="/p/{{ object.parent_page.id }}">Back</a>
        {% endif %}


        {% for nav in navigation %}
            <a href="/p/{{ nav.id }}">{{ nav.title }}</a>
        {% endfor %}
    
    </nav> 
    
    {% for item in items %}
        
        {% include item.template_type with item_object=item %}

    {% endfor %}
    
    <hr>

    <h4>Navigation Order: {{ navigation_order }}</h4>
    <h4>Order: {{ items_order }}</h4>
</body>

</html>
```


## templates/title.html
```jinja
<h1>{{ item_object.text }}</h1>
```


## templates/paragraph.html
```jinja
<pre>{{ item_object.text }}</pre>
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
