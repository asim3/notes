`urls.py`
```py
from django.views.generic import TemplateView


urlpatterns = [
    path('', TemplateView.as_view(template_name="base/home.html") ),
    # ...
]
```


`nano settings.py`
```py
TEMPLATES = [
    {
        # ...
        'DIRS': [BASE_DIR / 'my_templates'],
    },
]
```


`mkdir -p my_templates/base/`    
`nano my_templates/base/home.html`
```django
{% extends "admin/base_site.html" %}
{% load i18n admin_urls static %}


{% block title %}
    Test page
{% endblock %}


{% block content %}
    {% if object %}
        <p>Deleting the {{ object_name }}</p>
        
        <ul>
            {% for obj in object %}
                <li>{{ obj }}</li>
            {% endfor %}
        </ul>

        <form method="post">{% csrf_token %}
            <div>
                <input type="hidden" name="post" value="yes">
                <input type="submit" value="{% translate 'Yes, I’m sure' %}">
                <a href="#" class="button cancel-link">
                    {% translate "No, take me back" %}
                </a>
            </div>
        </form>
    {% endif %}
{% endblock %}
```


## extra head and body
`nano my_templates/base/home.html`
```django
{% extends "admin/base_site.html" %}

{% block extrahead %}
    <script src="{% static 'admin/js/cancel.js' %}" async></script>
{% endblock %}

{% block bodyclass %}bg-info{% endblock %}
```
