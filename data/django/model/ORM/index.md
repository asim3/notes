```python
from .models import table1, table2, table3
```


## add to database
```python
from .models import Table1
Table1(title="hello, world",type="title",img="11.jpg").save()

x = table1()
x.title = 'hello, world'
x.save()
```


## Select
```python
table1.objects.get(id=8)
table1.objects.filter(id__isnull=False) # all
table1.objects.filter(id__isnull=True) # null

table1.objects.exclude(id__isnull=True) # all
table1.objects.exclude(id__isnull=False) # null

table1.objects.exclude(title__isnull=True).values("first_name", "last_name")
table1.objects.exclude(title__isnull=True).only("first_name", "last_name")
```

## Count
```python
table1.objects.count()
table1.objects.all().count()
```

## Limit
```python
table1.objects.all()[:1] 	# limit ?
table1.objects.all()[:5] 	# limit 5
table1.objects.all()[15:20] 	# start after 15
```

## Order By
```python
table1.objects.all().order_by('name')
table1.objects.all().order_by('-name')
```


## Unique
```py
Pledge.objects.values('next_tearm').order_by('next_tearm').distinct()
```
