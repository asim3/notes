## Translation
```django
{% load i18n %}
<p>{% trans "Welcome to our page" %}</p>


{% get_current_language as LANGUAGE_CODE %}
<!-- Current language: {{ LANGUAGE_CODE }} -->


{% get_available_languages as languages %}
{% for lang_code, lang_name in languages %}
    {% language lang_code %}
        <a href="{% url 'category' slug=category.slug %}">{{ lang_name }}</a>
    {% endlanguage %}
{% endfor %}
```



## Show form data and errors
```django
{{ form.cleaned_data }}
{% for err in form.errors.values %}
  {{ err }}
{% endfor %}
```


## عرض جميع بيانات متغير
```django
{% for key, value in json.items %}
  <li>{{key}} - {{value}}</li>
{% endfor %}
```



## debug
```django
{% debug %}

<pre>{% debug %}</pre>
<pre>{% filter force_escape %}{% debug %}{% endfilter %}</pre>
```



## template debug
```bash
pip install django-template-debug
```


```python
INSTALLED_APPS = ('template_debug', )
```


```django
{% load debug_tags %}
```


```django
The available tags to use:
{% variables %}
{% set_trace %}
{% attributes varname %}
{% details varname %}
```


```django
<pre style="direction:ltr;text-align:left;white-space: pre-line;">
    {% variables %}
</pre>
```



## show python object
```django
{% if object_list %}
	{{ object_list|join:" - " }}
```
