## indent
```yaml
{% filter indent(8) %}{% include 'apps/quota/cpu_200.yaml' %}{% endfilter %}



    {% filter indent(8) %}
{% include 'apps/quota/cpu_200.yaml' %}
    {% endfilter %}
```


## form data and errors
```django
{{ form.cleaned_data }}
{% for err in form.errors.values %}
  {{ err }}
{% endfor %}
```


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
```txt
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
