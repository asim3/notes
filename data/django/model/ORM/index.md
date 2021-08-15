```python
from .models import table1, table2, table3
```


## add to database
```python
from .models import Table1


Table1(title="hello, world").save()

# OR

instance = Table1()
instance.title = 'hello, world'
instance.save()
```


## select
```python
from .models import Table1


try:
    Table1.objects.get(id=8)
except Table1.DoesNotExist:
    pass


Table1.objects.all()

Table1.objects.values('id')

Table1.objects.values('id').distinct()

Table1.objects.values_list("id")

list(Table1.objects.values_list("id", flat=True))
```


## filter
```python
Table1.objects.filter(id__isnull=False) # all
Table1.objects.filter(id__isnull=True) # null

Table1.objects.exclude(id__isnull=True) # all
Table1.objects.exclude(id__isnull=False) # null

Table1.objects.exclude(title__isnull=True).values("first_name", "last_name")
Table1.objects.exclude(title__isnull=True).only("first_name", "last_name")
```

## Count
```python
Table1.objects.count()
Table1.objects.all().count()
```

## Limit
```python
Table1.objects.all()[:1] 	# limit ?
Table1.objects.all()[:5] 	# limit 5
Table1.objects.all()[15:20] 	# start after 15
```

## Order By
```python
Table1.objects.all().order_by('name')
Table1.objects.all().order_by('-name')
```
