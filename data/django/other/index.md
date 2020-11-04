[accounting app](https://django-hordak.readthedocs.io/en/stable/accounting-for-developers.html)


## To install psycopg2
```txt
sudo apt install -y libpq-dev
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



## Auto models
Auto-generate the models 
```txt
python manage.py inspectdb > show_me_models.py --database=other_db
```



## Reset Migrations
How to Reset Migrations
```txt
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete

cd appname
find . -path "*/__pycache__/*" -delete
find . -path "*/__pycache__" -delete
```
