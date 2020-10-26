## التثبيت
```python
pip install --upgrade django-crispy-forms
```

## CDN link
```html
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
```


```python
INSTALLED_APPS = (
    ...
    'crispy_forms',
)

# CRISPY_TEMPLATE_PACK = 'uni_form'
CRISPY_TEMPLATE_PACK = 'bootstrap4'
```

## إضافة الى النماذج
```django
{% load crispy_forms_tags %}

<form method="post" class="uniForm">
    {{ form|crispy }}
</form>
```

```django
{% load crispy_forms_tags %}

<form method="post" class="uniForm">
    {{ crispy }}
    {{ form|as_crispy_errors }}
    {{ form.field|as_crispy_field }}
</form>
```
