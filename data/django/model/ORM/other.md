## run sql
```python
from django.db import connection
connection.cursor().execute("UPDATE myapp_table1 SET title = 'xxx'")

table = connection.cursor().execute("select * from table")
```


## Using
```python
Author.objects.all()
Author.objects.using('default').all()
Author.objects.using('other').all()

my_object.save(using='legacy_users')
```


## Multi DB
```python
from django.db import connections

with connections['kfupm_banner'].cursor() as cursor:
    cursor.execute("""SELECT * FROM NAVEED.STUDENT_INFO_READMIT
      WHERE SID = %s and NAT_CODE = %s""", [kfupm_id, national_id])
    banner_data = dictfetchall(cursor)
    if banner_data:
        banner_data = banner_data[0]
        obj.kfupm_gpa = banner_data['CGPA']


row = cursor.fetchone()
cursor.fetchall() # ((54360982, None), (54360880, None))
results = namedtuplefetchall(cursor) # [Result(id=54360982, parent_id=None), Result(id=54360880, parent_id=None)]

results[0].id # 54360982
results[0][0] # 54360982
```


```python
def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]

dictfetchall(cursor) # [{'parent_id': None, 'id': 54360982}, {'parent_id': None, 'id': 54360880}]
```


```python
p = Person(name='Fred')
p.save(using='first')
p.pk = None # Clear the primary key.
p.save(using='second')
```


## Map into Person instances
```python
name_map = {'first': 'first_name', 'last': 'last_name', 'bd': 'birth_date', 'pk': 'id'}
Person.objects.using('other_db').raw('SELECT * FROM some_other_table WHERE last_name = %s LIMIT 1', ['Doe'], translations=name_map)
```
