## Tags
```jinja
{% load wagtailcore_tags %}


{% block content %}
    
    {{ page.body|richtext }}
    
    Back to index
    {% pageurl page.get_parent %}
    {% pageurl page.other_page fallback='coming_soon' %}

    {% slugurl 'news' %}


{% endblock %}
```


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


## admin Bar
```jinja
{% load wagtailuserbar %}


<body>
    {% wagtailuserbar %}

    {% wagtailuserbar 'top-left' %}
    {% wagtailuserbar 'top-right' %}
    {% wagtailuserbar 'bottom-left' %}
    {% wagtailuserbar 'bottom-right' %}
</body>
```


## Pixel & Analytics
```jinja
{% if not request.is_preview %}

    <script>
      // ...
    </script>

{% endif %}
```
