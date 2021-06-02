[accounting app](https://django-hordak.readthedocs.io/en/stable/accounting-for-developers.html)


## Time
```py
from django.utils import timezone


date = timezone.now()
date.strftime("%d/%m/%Y %H:%M:%S")
# '15/03/2021 13:59:57'
date.strftime("%d/%m/%Y %I:%M:%S %p")
# '15/03/2021 01:59:57 PM'


next_hour = timezone.now() + timezone.timedelta(hours=5)
next_hour.strftime("%d/%m/%Y %H:%M:%S")


next_day = timezone.now() + timezone.timedelta(days=1)
next_day.strftime("%d/%m/%Y %H:%M:%S")
```


## To install psycopg2
```bash
sudo apt install -y gcc python3-dev libpq-dev
# gcc            : GNU C compiler
# python3-dev    : header files and a static library for Python (default)
# libpq-dev      : header files for libpq5 (PostgreSQL library)


# sudo apt install -y musl-dev
# musl-dev       : standard C library development files


# sudo apt install -y python3-psycopg2
```


## install with docker
```bash
docker container run -it ubuntu  /bin/bash


apt-get update -y 


apt-get install -y python3 python3-venv \
  && python3 -m venv .venv \
  && source .venv/bin/activate


apt install -y gcc python3-dev libpq-dev # musl-dev

pip install psycopg2
```


## install with alpine
```dockerfile
RUN apk add --no-cache --update gcc musl-dev postgresql-dev
# gcc            : GNU C compiler
# musl-dev       : standard C library development files
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
