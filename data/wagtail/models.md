## models
```py
from django.db import models
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):
    my_id = models.IntegerField(blank=True, null=True)
    my_title = models.CharField("العنوان", max_length=100, null=True)
    is_new = models.BooleanField(blank=True, null=True)
    year = models.DateTimeField(null=True) 
    gpa = models.DecimalField(max_digits=3, decimal_places=2, null=True) 

    my_text_field = RichTextField("My RichText", blank=True)


    content_panels = Page.content_panels + [
        FieldPanel('my_id'),
        FieldPanel('my_title'),
        FieldPanel('is_new'),
        FieldPanel('year'),
        FieldPanel('gpa'),

        FieldPanel('my_text_field'),


        # Title
        FieldPanel('my_text_field', heading="My Title"),
        

        # CSS
        FieldPanel('my_text_field', classname="full"),
        FieldPanel('my_text_field', classname="title"),
    ]
```
