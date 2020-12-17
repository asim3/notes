## Null
```python
table1.objects.filter(title__isnull=True)
table1.objects.exclude(title__isnull=True)
```

## 'AAA' == 'aaa'
```python
table1.objects.filter(title__exact='Java') 	# it is case sensitive
table1.objects.filter(title__iexact='Java') # it's not case sensitive
```

## Like
```python
table1.objects.filter(title__contains='nt') 	# like '%nt%'
table1.objects.filter(title__icontains='nt')	# like '%nt%' |case sensitive (no)
table1.objects.filter(title__startswith='#a')
table1.objects.filter(title__endswith='y')
```

## <=>
```python
table1.objects.filter(age__gt=25) 		# age > 25
table1.objects.filter(age__gte=25) 		# age >= 25
table1.objects.filter(age__lt=25) 		# age < 25
table1.objects.filter(age__lte=25) 		# age <= 25
```

## Date
```python
from datetime import datetime, timedelta

time_threshold = datetime.now() - timedelta(hours=5)
results = Widget.objects.filter(created__lt=time_threshold)

table1.objects.filter(date__gt='1990-01-01')
table1.objects.filter(date__lt='1990-01-01')
```


## In
```python
table1.objects.filter(title__in=['asim', 'bader', 'ahmed'])
```

## foreign key relationship
```python
table1.objects.table2_set.order_by('-id').first()
```
