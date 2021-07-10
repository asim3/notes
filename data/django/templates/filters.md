# Filters

## list
```django
{{ object_list|join:" - " }}
```


## Default
```django
{{ item.somefield|default:"" }}
{{ item.somefield|default_if_none:"" }}


{% value|yesno:_("yes,no") %}
```


## html injection
```django
{{ c.title|safe }}


{% autoescape on %}     {% endautoescape %}
```


## Date and Time
```django
{{ object.period_start|date:"Y-m-d\\TH:m" }}
```


## math
```django
{{ page_obj.number|add:'-3' }}
{% if forloop.counter|divisibleby:2 %}
```