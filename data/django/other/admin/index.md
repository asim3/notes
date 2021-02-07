## Admin Site Title
`nano urls.py`
```python
from django.contrib import admin
from django.utils.translation import gettext_lazy as _

# Text
admin.site.site_header = _("Site Header")
admin.site.site_title = _("site title")
admin.site.site_url = _("https://www.google.com") or "/site-url/"
admin.site.index_title = "index title"
admin.site.empty_value_display = _("empty_value_display")

# Form
# admin.site.login_form = AuthenticationForm

# Template:
# admin.site.index_template = "admin/base.html"
# admin.site.app_index_template = "admin/base.html"
# admin.site.login_template = "admin/base.html"
# admin.site.logout_template = "admin/base.html"

urlpatterns = [
    path('admin/', admin.site.urls),
]
```


## Add Models to Admin Pages
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
