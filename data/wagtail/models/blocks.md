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
        form_classname = 'struct-block my-css-class'
```

> `StructBlock` is a block consisting of a fixed group of sub-blocks to be displayed together



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


## template
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


## StructBlock Admin Template
```py
from wagtail.core.blocks import StructBlock, CharBlock, TextBlock
from wagtail.images.blocks import ImageChooserBlock


class MyCardBlock(StructBlock):
    title = CharBlock(required=True, help_text="Add your title")
    text = TextBlock(required=True, help_text="Add additional text")
    my_image = ImageChooserBlock()

    class Meta:
        # ...
        form_template = 'home/blocks/card_block_form.html'
```



## template
`my_site/home/templates/home/blocks/card_block_form.html`
```jinja
{% load wagtailadmin_tags  %}

<hr />
<hr />
<hr />

children: {{ children }}                   <br />
help_text: {{ help_text }}                 <br />
classname: {{ classname }}                 <br />
block_definition: {{ block_definition }}   <br />
prefix: {{ prefix }}                       <br />

<hr />
<hr />
<hr />

<div class="{{ classname }}">
    {% if help_text %}
        <span>
            <div class="help">
                {% icon name="help" class_name="default" %}
                {{ help_text }}
            </div>
        </span>
    {% endif %}

    {% for child in children.values %}
        <div class="field {% if child.block.required %}required{% endif %}" data-contentpath="{{ child.block.name }}">
            {% if child.block.label %}
                <label class="field__label" {% if child.id_for_label %}for="{{ child.id_for_label }}"{% endif %}>{{ child.block.label }}</label>
            {% endif %}
            {{ child.render_form }}
        </div>
    {% endfor %}
</div>
```
