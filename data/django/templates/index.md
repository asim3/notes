## render a template
```py
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site


current_site = get_current_site(request)
template_name = "my-app/my-template.yaml"
context = {"domain": current_site.domain}

html = render_to_string(template_name, context)
```


```jinja
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    
    <input type="submit" value="update" />
</form>
```


```jinja
{% load static %}
{% static 'css/main.css' %}
{% static 'js/main.js' %}
```

## URLs by name
```jinja
{% url 'blog-home' %}

<a href="{% url 'admin:index' %}"  >index</a>
<a href="{% url 'admin:login' %}"  >login</a>
<a href="{% url 'admin:logout' %}" >logout</a>

<a href="{% url 'admin:app_list' 'myapp' %}">Application index page</a>
<a href="{% url 'admin:myapp_mymodel_changelist' %}"  >Model Home</a>

<a href="{% url 'admin:myapp_mymodel_changelist' %}"  >Changelist</a>
<a href="{% url 'admin:myapp_mymodel_add' %}"         >Add</a>
<a href="{% url 'admin:myapp_mymodel_history' '1' %}" >History</a>
<a href="{% url 'admin:myapp_mymodel_delete' '1' %}"  >Delete</a>
<a href="{% url 'admin:myapp_mymodel_change' '1' %}"  >Change</a>
```


## render template
```py
from django.template.loader import get_template

def get_template_as_string():
  template_name = "my-app/my-template.yaml"
  context = {}

  template = get_template(template_name)
  return template.render(context)
```


## Master Page
in master.html
```jinja
{% block content %}{% endblock %}
```


in dependents pages
```jinja
{% extends "app_name/master.html" %}

{% block content %}{% endblock %}
```


include another page
```jinja
{% include "base/paginator.html" %}
```


```jinja
{% if aaa is not None %}
    ...
{% elif bbb %}
    ...
{% elif ccc != '' %}
    ...
{% else %}
    ...
{% endif %}
```


```jinja
{% if not aaa or bbb %}
    There are no athletes or there are some coaches.
{% endif %}

{% if aaa and not bbb %}
    There are some athletes and absolutely no coaches.
{% endif %}
```


```jinja
{% if aaa and bbb or ccc %}
#  if (aaa and bbb) or ccc
```



for loop
```jinja
{% for post in posts %}
  <tr class="{% cycle '#ff0000' '#0000ff' %}">
    {{ post.author }}
    {{ post.title }}
  </tr>
{% empty %}
  Sorry, no athletes in this list.
{% endfor %}
```


عرض النموذج على شكل مختلف
```jinja
{{ form.as_p }}
```


عرض اسم المستخدم
```jinja
{% if user.is_authenticated %}
	<h1>welcom {{ user.username }}</h1>
	<a href="/logout/">تسجيل الخروج</a>
{% else %}
	<h1>please login</h1>
{% endif %}
```



عرض الرسالة المرسلة من ملف العرض
```jinja
{% if messages %}
  {% for message in messages %}
    <div class="alert alert-{{ message.tags }}">
      {{ message }}
    </div>
  {% endfor %}
{% endif %}
```


Display Choice Value
```python
object.get_aaaa_display
```
