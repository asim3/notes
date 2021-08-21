[docs](https://docs.wagtail.io/)

## start
```sh
python3 -m venv .venv \
  && source ./.venv/bin/activate \
  && pip install wagtail gunicorn \
  && wagtail start my_site \
  && code my_site
```

```py
python manage.py migrate
python manage.py createsuperuser --username asim
```
