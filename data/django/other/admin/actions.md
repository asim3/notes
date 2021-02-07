## Add Models to Admin Pages
`nano admin.py`
```py
from django.contrib.admin import register, ModelAdmin
from .models import Students


@register(Students)
class StudentsAdmin(ModelAdmin):
    # ...
    
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
        data = 'ABcd 1234\n1\n\t2\n\t\t3\n\n'
        response = HttpResponse(data, content_type='text/plain')
        filename = 'my-file.txt'
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
