[accounting app](https://django-hordak.readthedocs.io/en/stable/accounting-for-developers.html)


## To install psycopg2
```bash
sudo apt install libpq-dev
```


## Limit in Oracle
```sql
SELECT * FROM MY_TABLE     OFFSET 100000 ROWS FETCH NEXT 5 ROWS ONLY;
```



## Test db connection
```py
with connections['other_db'].cursor() as cursor:
  cursor.execute("""SELECT TO_CHAR (SYSDATE, 'MM-DD-YYYY HH24:MI:SS') "NOW" FROM DUAL;""")
  cursor.fetchall()
```



## Auto-generate the models 
```bash
python manage.py inspectdb > show_me_models.py --database=other_db
```



## How to Reset Migrations
```bash
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete
```
