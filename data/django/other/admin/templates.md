`urls.py`
```py
from django.views.generic import TemplateView


urlpatterns = [
    path('', TemplateView.as_view(template_name="base/home.html") ),
    # ...
]
```


`nano settings.py`
```py
TEMPLATES = [
    {
        # ...
        'DIRS': [BASE_DIR / 'my_templates'],
    },
]
```


`mkdir -p my_templates/base/`    
`nano my_templates/base/home.html`
```django
{% extends "admin/base_site.html" %}
{% block title %}
    Test page
{% endblock %}
```
