```django
{% load static %}
{% static 'css/main.css' %}
{% static 'js/main.js' %}
```

call URLs by name
```django
{% url 'blog-home' %}
```


#### Master Page

in master.html
```django
{% block content %}{% endblock %}
```


in dependents pages
```django
{% extends "app_name/master.html" %}

{% block content %}{% endblock %}
```


include another page
```django
{% include "base/paginator.html" %}
```


```django
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


```django
{% if not aaa or bbb %}
    There are no athletes or there are some coaches.
{% endif %}

{% if aaa and not bbb %}
    There are some athletes and absolutely no coaches.
{% endif %}
```


```django
{% if aaa and bbb or ccc %}
#  if (aaa and bbb) or ccc
```



for loop
```django
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
```django
{{ form.as_p }}
```


عرض اسم المستخدم
```django
{% if user.is_authenticated %}
	<h1>welcom {{ user.username }}</h1>
	<a href="/logout/">تسجيل الخروج</a>
{% else %}
	<h1>please login</h1>
{% endif %}
```



عرض الرسالة المرسلة من ملف العرض
```django
{% if messages %}
  {% for message in messages %}
    <div class="alert alert-{{ message.tags }}">
      {{ message }}
    </div>
  {% endfor %}
{% endif %}
```


Display Choice Value
```django
object.get_aaaa_display
```

Default
```django
{{ item.somefield|default_if_none:"" }}
{{ item.somefield|default:"" }}
```

Date and Time
```django
{{ object.period_start|date:"Y-m-d\\TH:m" }}
```
