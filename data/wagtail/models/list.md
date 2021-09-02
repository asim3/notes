## List
```py
from wagtail.core.models import Page
from wagtail.core.blocks.stream_block import StreamBlock
from wagtail.core.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.admin.edit_handlers import StreamFieldPanel


class MyImagesListBlock(StreamBlock):
    image_file = ImageChooserBlock()



class CardPage(Page):
    body = StreamField([
        ("my_images", MyImagesListBlock()),
    ], null=True,)

    content_panels = Page.content_panels + [
        StreamFieldPanel('body', heading="My Body"),
    ]
```



## list Block
```py
from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.images.blocks import ImageChooserBlock


class CardBlock(Page):
    title = blocks.CharBlock(required=True, help_text="Add your title")
    cards = blocks.ListBlock(
        blocks.StructBlock([
            ("image", ImageChooserBlock(required=True)),
            ("title", blocks.CharBlock(required=True, max_length=40)),
            ("text", blocks.TextBlock(required=True, max_length=200)),
            ("button_page", blocks.PageChooserBlock(required=False)),
            ("button_url", blocks.URLBlock(required=False)),
        ])
    )

    class Meta:
        template = "my_home/card_block.html"
        icon = "placeholder"
        label = "Staff Cards"
```
