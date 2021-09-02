## admin
```py
INSTALLED_APPS = [
   # ...
    'wagtail.contrib.modeladmin',
]
```



## hooks
`nano wagtail_hooks.py`
```py
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import HomePage


class HomePageAdmin(ModelAdmin):
    model = HomePage
    list_display = ("title", "live", "owner", "first_published_at",)
    list_filter = ("owner", "content_type",)
    search_fields = ("title", "slug",)

    # main sidebar
    exclude_from_explorer = False
    # Settings sub-menu
    add_to_settings_menu = False
    menu_order = 200  # 1st : 000 - 2nd: 100
    menu_label = 'HomePage'  # else model.verbose_name_plural
    # menu_icon = 'folder-inverse'
    # menu_icon = 'folder-open-inverse'
    # menu_icon = 'folder-open-1'
    # menu_icon = 'folder'
    # menu_icon = 'group'
    # menu_icon = 'home'
    # menu_icon = 'user'
    menu_icon = 'list-ul'

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        # Only show people managed by the current user
        # return queryset.filter(managed_by=request.user)
        return queryset.live().public().order_by("-first_published_at")


modeladmin_register(HomePageAdmin)
```



## register
```py
from django.contrib import admin
from wagtail.core.models import Page


admin.site.register({Page})
```
