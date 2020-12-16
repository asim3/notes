## models in admin page
Shows models in admin page
`nano admin.py`
```py
from django.contrib.admin import register, ModelAdmin
from .models import Students
from .forms import StudentsForm


@register(Students)
class StudentsAdmin(ModelAdmin):
    list_display = ('student', 'gpa', 'date_update', 'phone',)
    list_filter = ("gpa",)
    search_fields = ('student', 'phone', 'phone_guardian')
    ordering = ('date_update',)
    form = StudentsForm
    add_form = StudentsForm
```


`nano apps.py`
```py
from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class AdministrationConfig(AppConfig):
    name = 'administration'
    verbose_name = _("aaaaaaaa")
```


## OR
```python
from django.contrib import admin
from .models import TableName

admin.site.register(TableName)
```


## Overriding !!!
Overriding admin templates
```python
# add template base "dirs" in settings
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['base/templates'],
        # ...
    },
]
```
