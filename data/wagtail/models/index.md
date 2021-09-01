## models
[docs](https://docs.wagtail.io/en/stable/reference/pages/model_reference.html)
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

    # parent
    max_count = 3
    max_count_per_parent = 2

    parent_page_types = ['my_site.HomePage', 'my_site.BlogArchivePage']
    subpage_types = ['my_site.BlogPage', 'my_site.BlogArchivePage']


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



## Multi Field Panel
```py
from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import MultiFieldPanel, FieldPanel


class HomePage(Page):
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    address = models.TextField(null=True)

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel('first_name'),
            FieldPanel('last_name'),
            FieldPanel('address'),
        ], heading="My Address"),
    ]
```



## Context
```py
class BlogIndexPage(Page):
    # ...

    def get_context(self, request):
        context = super().get_context(request)
        context['blog_entries'] = BlogPage.objects.child_of(self).live()
        context['managed_by'] = BlogPage.objects.filter(managed_by=request.user)
        context['blog_public'] = BlogPage.objects.live().public().order_by("-first_published_at")
        return context
```



## admin panels
```py
from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):
    my_title = models.CharField("العنوان", max_length=100, null=True)


    content_panels = Page.content_panels + [
        FieldPanel('my_title'),
    ]


    promote_panels = Page.promote_panels + [
        FieldPanel('my_title'),
    ]

    
    settings_panels = Page.settings_panels + [
        FieldPanel('my_title'),
    ]
```
