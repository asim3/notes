## admin
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
        MultiFieldPanel(
            [
                FieldPanel('first_name'),
                FieldPanel('last_name'),
                FieldPanel('address'),
            ],
            heading="My Address",
        ),
    ]
```
