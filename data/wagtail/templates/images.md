## image tags
```jinja
{% load wagtailimages_tags %}


{% block content %}
    
    {% image page.photo original %}

    {% image page.photo width-400 %}
    {% image page.photo width-400 format-jpeg %}
    {% image page.photo width-400 bgcolor-0F0F0F format-jpeg %}
    {% image page.photo width-400 class="foo" id="bar" %}

    {% image page.photo height-480 %}

    contain
    {% image page.photo max-1000x500 %}

    Zoom
    {% image page.photo min-500x200 %}
    
    {% image page.photo scale-50 %}

    {% image page.photo fill-200x200 %}
    
    focal point
    {% image page.photo fill-200x200-c100 %}
    {% image page.photo fill-200x200-c77 %}
    {% image page.photo fill-200x200-c52 %}

{% endblock %}
```



## as URL
```jinja
{% image object.specific.image max-200x200 bgcolor-FFF format-jpeg as tmp_photo %}

<a href="{% pageurl object %}" class="brand">
    <div style="background-image: url({{ tmp_photo.url }})"></div>
</a>
```



## loop
```jinja
<div class="row justify-content-evenly partners-logo">
    {% for image in self.images %}

        {% image image.value max-300x300 as main_image %}

        <div style='background-image: url("{{ main_image.url }}");'></div>

    {% endfor %}
</div>
```
