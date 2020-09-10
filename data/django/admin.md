## models in admin page
Shows models in admin page
```python
from django.contrib import admin
from .models import TableName

admin.site.register(TableName)
```


```python
from django.contrib import admin
from .models import Table1

@admin.register(Table1)
class AdminTable1(admin.ModelAdmin):
    list_display = ('title', 'desc', 'year', 'date', 'age', 'ser')
```


## Overriding
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
