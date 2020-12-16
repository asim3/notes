## Translation
```django
{% load i18n %}

<p>{% translate "Welcome to our page" %}</p>


{% get_current_language as LANGUAGE_CODE %}
<!-- Current language: {{ LANGUAGE_CODE }} -->


{% get_available_languages as languages %}
{% for lang_code, lang_name in languages %}
    {% language lang_code %}
        <a href="{% url 'category' slug=category.slug %}">{{ lang_name }}</a>
    {% endlanguage %}
{% endfor %}
```


## retrieve only
```django
{% load i18n %}

{% translate "starting point" as start %}
{% translate "end point" as end %}
{% translate "La Grande Boucle" as race %}

<h1>
  <a href="/" title="{% blocktranslate %}Back to '{{ race }}' homepage{% endblocktranslate %}">{{ race }}</a>
</h1>

<p>
    {% for stage in tour_stages %}
        {% cycle start end %}: {{ stage }}{% if forloop.counter|divisibleby:2 %}<br>{% else %}, {% endif %}
    {% endfor %}
</p>
```


## yes no
```django
{% load i18n %}

{% some_tag _("Page not found") value|yesno:_("yes,no") %}
```


## blocktranslate
```django
{% load i18n %}

{% blocktranslate %}This string will have {{ value }} inside.{% endblocktranslate %}
```
