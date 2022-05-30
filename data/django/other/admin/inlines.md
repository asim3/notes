# inlines

## models.py
```py
from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=100)


class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
```


## admin.py
```py
from django.contrib import admin
from my_app.models import Book, Author


# class BookInline(admin.StackedInline):
class BookInline(admin.TabularInline):
    model = Book
    extra = 0
    min_num = 1
    max_num = 5
    verbose_name = "verbose name"
    verbose_name_plural = "verbose name plural"
    # can_delete = False


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    inlines = [BookInline, ]


admin.site.register(Book)
```
