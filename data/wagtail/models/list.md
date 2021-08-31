## model
```py

```



## template
```jinja

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
