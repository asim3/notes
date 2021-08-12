# Overriding templates
```py
from django.contrib.admin import register, ModelAdmin
from .models import SendEmailRecord


@register(SendEmailRecord)
class SendEmailRecordAdmin(ModelAdmin):
    list_display = ['email', 'date_added']
    ordering = ('-date_added',)

    change_list_template = "base/list   .html"
    change_form_template = "base/update .html"
    add_form_template =    "base/new    .html"
```



# templates base
```jinja
{% extends "admin/base_site.html" %}
{% load i18n %}

{% block content %}

    <h3>
        {% translate "الرئيسية" %}
    </h3>

{% endblock %}
```



# templates change form
```jinja
{% extends "admin/change_form.html" %}
{% load i18n %}

{% block content %}

    {{ block.super }}

    <h3>
        {% translate "إضافة حقل جديد" %}
    </h3>

{% endblock %} 
```



# templates list
```jinja
{% extends "admin/change_list.html" %}
{% load i18n %}

{% block content %}

    {{ block.super }}

    <h3>
        {% translate "قائمة" %}
    </h3>

{% endblock %} 
```
