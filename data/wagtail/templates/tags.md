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
