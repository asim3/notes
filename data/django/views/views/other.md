## Session
```python
request.session['id'] = 123
request.session['name'] = 'ssss'
request.session.get('id')
```


## User
```python
request.user.groups
request.user.user_permissions
request.user.is_staff
request.user.is_active
request.user.is_superuser
request.user.last_login
user.date_joined
user.is_authenticated
user.is_anonymous

user.make_random_password(length=10)
user.set_password('raw_password') # user._password
```


## عرض اسم الجدول
```python
Table1._meta.get_fields()[2].name
```


## عرض اسم الحقل
```python
Model._meta.verbose_name.title()
Model._meta.verbose_name_plural.title()
Model._meta.verbose_name_raw
```


## Get from DB or ...
```python
# 404
from django.shortcuts import get_object_or_404
queryset = get_object_or_404(Table1, pk=obj_id)

# create
obj, created = Table1.objects.get_or_create(
    first_name='John',
    last_name='Lennon',
    defaults={'birthday': date(1940, 10, 9)},
)
```


## Try
```python
from django.http import Http404

try:
	queryset = Table1.objects.get(id=id)
except Table1.DoesNotExist:
	raise Http404
```


## Ensure CSRF cookie
```python
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def view_func(request):
	# ...
```


## ارسال رسالة الى صفحات العرض لمرة واحدة
```python
from django.contrib import messages

messages.success(request, f'Account created for {username}!')
messages.debug(request, 'text')
messages.info
messages.warning
messages.error
```
