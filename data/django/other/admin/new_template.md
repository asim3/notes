## New
```jinja
{% extends "admin/base_site.html" %}
{% load i18n admin_urls static %}



{% block title %}My Site Name{% endblock %}



{% block extrastyle %}
    {{ block.super }}
    <link rel="stylesheet" type="text/css" href="{% static "admin/css/changelists.css" %}">
    <link rel="stylesheet" type="text/css" href="{% static "admin/css/forms.css" %}">
{% endblock %}



{% block branding %}
    <h1 id="site-name"><a href="{% url 'admin:index' %}">My Site Name</a></h1>
{% endblock %}



{% block breadcrumbs %}

    <div class="breadcrumbs">
        <a href="{% url 'admin:index' %}">{% translate 'Home' %}</a>
        &rsaquo; <a href="{% url 'admin:app_list' app_label="advertisement" %}">{% trans "Advertisement" %}</a>
        &rsaquo; <a href="{% url 'admin:advertisement_registration_changelist' %}">{% trans "Registration" %}</a>
        &rsaquo; {% trans "My Update Page" %}
    </div>



    {% if done %}
        <ul class="messagelist">
            <li class="success">
                تم تحديث {{ done }}
            </li>
        </ul>
    {% endif %}


{% endblock %}



{% block content %}

<h1>My Title</h1>



{% if form.non_field_errors %}
    {% for error in form.non_field_errors %}
        <p class="errornote">
            {{ error }}
        </p>
    {% endfor %}
{% endif %}



<div id="content-main">

    <form method="POST" enctype="multipart/form-data">

        {% csrf_token %}

        <fieldset class="module aligned ">
            <div class="form-row field-name">
                <div>
                    <label class="required" for="id_name">الاسم:</label>
                    <input type="text" name="name" class="vTextField" maxlength="50" required="" id="id_name">
                </div>
            </div>


            <div class="form-row field-phone">
                <div>
                    <label class="required" for="id_phone">رقم الجوال:</label>
                    <input type="text" name="phone" class="vTextField" maxlength="10" required="" id="id_phone">
                </div>
            </div>


            <div class="form-row field-file">
                <div>
                    <label class="required" for="id_my_file">My file:</label>
                    <input type="file" name="my_file" class="vTextField" required="" id="id_my_file">
                </div>
            </div>


            <div class="form-row field-excel-file">
                <div>

                    <label class="required" for="id_excel_file">{% trans "ملف الإكسل" %}:</label>

                    {{ form.exile_file }}

                    {{ form.exile_file.errors }}

                </div>
            </div>

        </fieldset>



        <div class="submit-row">

            <input type="submit" value="{% trans "Save" %}" class="default" name="_save">

        </div>

    </form>

</div>


<br class="clear">


{% endblock %}
```
