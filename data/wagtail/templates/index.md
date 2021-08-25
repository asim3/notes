## Template
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



```jinja
{% extends "base.html" %}
{% load wagtailcore_tags %}



{% block content %}
    <h1>{{ page.title }}</h1>

    <hr>


    <div class="intro">{{ page.intro|richtext }}</div>


    {% for post in page.get_children %}
        <h2><a href="{% pageurl post %}">{{ post.title }}</a></h2>
        {{ post.specific.intro }}
        {{ post.specific.body|richtext }}
    {% endfor %}


{% endblock %}
```
