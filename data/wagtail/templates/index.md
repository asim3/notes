## Template
[docs](https://docs.wagtail.org/en/stable/topics/writing_templates.html#)


`templates/home/home_page.html`
```jinja
{% extends "base.html" %}
{% load wagtailcore_tags %}


{% block content %}

    {{ page.my_id }}                    <br /><br />
    {{ page.my_title }}                 <br /><br />
    {{ page.is_new }}                   <br /><br />
    {{ page.year }}                     <br /><br />
    {{ page.gpa }}                      <br /><br />
    
    {{ page.my_text_field }}            <br /><br /> <hr>
    {{ page.my_text_field|richtext }}   <br /><br />

    {{ page.x|richtext }}

{% endblock %}
```



## page parent
```jinja
{% load wagtailcore_tags %}


{% block content %}

    <a href="{% pageurl page.get_parent %}">Back to index</a>

{% endblock content %}
```



## page children
```jinja
{% extends "base.html" %}
{% load wagtailcore_tags %}


{% block content %}

    {% for post in page.get_children %}
        
        <a href="{% pageurl post %}">
            {{ post.title }}
        </a>
        
        <br />

        {{ post.specific.my_title }}    <br />

        {{ post.specific.gpa }}         <br />
        
        <br />

    {% endfor %}

{% endblock %}
```


## Multi-site
```jinja
{% load wagtailcore_tags %}

{% wagtail_site as current_site %}
```
