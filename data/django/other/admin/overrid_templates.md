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

    <div id="content-main" style="padding-top: 3rem;">
        <h1>
            {% translate "إضافة من ملف إكسل" %}
        </h1>

        <form method="POST" enctype="multipart/form-data">

            {% csrf_token %}

            <fieldset class="module aligned ">
                <div class="form-row field-excel">
                    <div>
                        <label class="required" for="id_excel">ملف إكسل:</label>
                        <input type="file" name="excel" required="" id="id_excel">
                    </div>
                </div>
            </fieldset>
            
            
            <div class="submit-row">

                <input type="submit" value="{% trans 'احفظ' %}" class="default" name="_save">

            </div>

        </form>
    </div>

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
