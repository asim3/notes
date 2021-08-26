## Tags
```jinja
{% load wagtailcore_tags %}


{% block content %}
    

    Back to index
    {% pageurl page.get_parent %}
    {% pageurl page.other_page fallback='coming_soon' %}

    {% slugurl 'news' %}


{% endblock %}
```



## admin options button 
```jinja
{% load wagtailuserbar %}


{% block content %}

    {% wagtailuserbar %}

    {% wagtailuserbar 'top-left' %}
    {% wagtailuserbar 'top-right' %}
    {% wagtailuserbar 'bottom-left' %}
    {% wagtailuserbar 'bottom-right' %}

{% endblock %}
```



## Pixel & Analytics
```jinja
{% if not request.is_preview %}

    <script>
      // ...
    </script>

{% endif %}
```
