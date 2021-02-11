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


## override object-tools
`nano admin.py`
```py
from django.contrib.admin import register, ModelAdmin
from .models import Students


@register(Students)
class StudentsAdmin(ModelAdmin):
    # ...
    change_list_template = 'students/tools.html'
```


`nano students/tools.html`
```django
{% extends "admin/change_list.html" %}

{% block object-tools-items %}
  <li>
    <a href="#your_action_url" class="viewlink">
      reports
    </a>
  </li>
  <li>
    <a href="#your_action_url" class="addlink">
      add new
    </a>
  </li>
  <li>
    <a href="#your_action_url" class="changelink">
      manage reports
    </a>
  </li>
  {{ block.super }}
{% endblock %}
```


## override templates
To `override` the admin template, move `"django.contrib.admin"` 
in your `INSTALLED_APPS` to the end of `INSTALLED_APPS`.
```text
nano <your_app>/templates/admin/<your_app>/<your_model>/change_list.html
```
