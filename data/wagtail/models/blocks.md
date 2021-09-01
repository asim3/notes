## blocks
```py
from wagtail.core.blocks import StructBlock, CharBlock, TextBlock
from wagtail.images.blocks import ImageChooserBlock


class MyCardBlock(StructBlock):
    title = CharBlock(required=True, help_text="Add your title")
    text = TextBlock(required=True, help_text="Add additional text")
    my_image = ImageChooserBlock()

    class Meta:
        template = "home/blocks/card_block.html"
        label = "My Card Label"
        icon = "edit"
        # icon = 'folder-inverse'
        # icon = 'folder-open-inverse'
        # icon = 'group'
        # icon = 'home'
        # icon = 'user'
```



## template
`templates/home/blocks/card_block.html`
```jinja
{% load wagtailimages_tags %}


{{ self.title }} <br>
{{ self.text }} <br>
{% image self.my_image width-350 format-jpeg %}
```




## video blocks
```py
from wagtail.core.blocks import StructBlock
from wagtail.documents.blocks import DocumentChooserBlock


class VideoBlock(StructBlock):
    video = DocumentChooserBlock()

    class Meta:
        template = "home/blocks/video_block.html"
        icon = "media"
        label = "Video"
```


`templates/home/blocks/video_block.html`
```jinja
<div class="container text-center">
    <video
        class="w-100"
        controls=""
        controlslist="nodownload"
        crossorigin="anonymous"
        playsinline=""
        poster="{{ self.video.url }}"
        preload="metadata"
        type="video/mp4"
        src="{{ self.video.url }}"
    >
    </video>
</div>
```
