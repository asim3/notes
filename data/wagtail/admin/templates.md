## Admin Logo
`templates/wagtailadmin/base.html`
```jinja
{% extends "wagtailadmin/base.html" %}
{% load static %}


{% block branding_logo %}

    <div class="u-hidden@sm">
        <img src="{% static 'img/logo.svg' %}" alt="" width="200">
    </div>

    <img class="u-hidden@xs" src="{% static 'img/logo.svg' %}" alt="">

{% endblock %}
```



## Favicon & Title & CSS
`templates/wagtailadmin/admin_base.html`
```jinja
{% extends "wagtailadmin/admin_base.html" %}
{% load static %}


{% block branding_favicon %}
    <link rel="shortcut icon" href="{% static 'img/favicon.ico' %}" />
{% endblock %}


{% block branding_title %}My Favicon Title{% endblock %}


{% block extra_css %}

    <style>
        @font-face {
            font-family:'main-font-regular';
            src: local('main-font-regular'), url('{% static 'fonts/cairo/Cairo-Regular.ttf' %}') format('TrueType');
        }

        @font-face {
            font-family:'main-font-bold';
            src: local('main-font-bold'), url('{% static 'fonts/cairo/Cairo-Bold.ttf' %}') format('TrueType');
        }
    </style>

    <link rel="stylesheet" type="text/css" href="{% static 'css/wagtail_admin.css' %}"/>

{% endblock %}
```



## Admin JS
`templates/wagtailadmin/admin_base.html`
```jinja
{% extends "wagtailadmin/admin_base.html" %}
{% load static %}


{% block extra_js %}

    <script type="text/javascript" charset="UTF-8" src="{% static 'js/wagtail_admin.js' %}"></script>

{% endblock %}
```



## Admin Home
`templates/wagtailadmin/home.html`
```jinja
{% extends "wagtailadmin/home.html" %}
{% load i18n %}


{% block branding_welcome %}
    {% trans "My Home Title" %}
{% endblock %}
```



## Admin Login
`templates/wagtailadmin/login.html`
```jinja
{% extends "wagtailadmin/login.html" %}
{% load i18n %}


{% block branding_login %}
    {% trans "Login to My Home Title" %}
{% endblock %}
```



## Admin user bar
`templates/wagtailadmin/userbar/base.html`
```jinja
{% extends "wagtailadmin/userbar/base.html" %}
{% load static %}


{% block branding_logo %}
    <div
        style="width: 3.5em;height: 3.5em;background-image: url({% static 'img/logo-sm-colored.svg' %});background-position: center;background-repeat: no-repeat;background-size: contain;"
        aria-hidden="true"
        focusable="false">
    </div>
{% endblock %}
```
