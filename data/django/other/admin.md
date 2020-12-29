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
    
    def my_action(self, request, queryset):
        queryset.update(phone='p')

    actions = ['my_action']
    my_action.short_description = "My action text"
```


## Actions
```py
from django.contrib.admin import register, ModelAdmin
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from .models import Students


@register(Students)
class StudentsAdmin(ModelAdmin):
    list_display = ('student', 'phone',)

    def my_action(self, request, queryset):
        data = queryset.filter(phone__isnull=True)
        print('\n\nadmin\n\n', data)
        data.update(phone=123)

        # return done massage. 
        # for plural use translation.ngettext
        self.message_user(request, 'update done.', messages.SUCCESS)
        self.message_user(request, 'ERROR', messages.ERROR)
        self.message_user(request, 'INFO', messages.INFO)
        self.message_user(request, 'WARNING', messages.WARNING)
        # OR
        return HttpResponseRedirect('https://google.com')
        # OR return file
        filename = 'my-file.txt'
        data = 'ABcd 1234\n1\n\t2\n\t\t3\n\n'
        
        # MIME types:
        content_type = 'text/plain'
        # content_type = 'image/jpeg'
        # content_type = 'image/png'
        # content_type = 'audio/*'
        # content_type = 'audio/mp3'
        # content_type = 'video/mp4'
        # content_type = 'application/*'
        # content_type = 'application/json'
        # content_type = 'application/octet-stream'
        # content_type = 'application/zip'
        # content_type = 'application/pdf'
        # content_type = 'application/vnd.ms-excel'
        # content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

        response = HttpResponse(data, content_type=content_type)
        response['Content-Disposition'] = 'attachment; filename="%s"' % filename
        return response

    actions = ['my_action']
    my_action.short_description = "My action text"
```
[MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)


## Export as Excel
```py
from django.contrib.admin import register, ModelAdmin
from .models import Students


@register(Students)
class StudentsAdmin(ModelAdmin):
    list_display = ('student', 'phone',)

    def export_as_excel(self, request, queryset):
        data = queryset.filter(phone__isnull=True)
        print('\n\n', data, '\n\n')
        data.update(phone=123)




    actions = ['export_as_excel']
    export_as_excel.short_description = "Export as Excel"
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
