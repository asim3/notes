[Docs](https://django-simple-history.readthedocs.io/en/latest/quick_start.html)


## install
```py
pip3 install django-simple-history==3.1.1
```


## settings.py
```py
INSTALLED_APPS = [
    "simple_history",
]

MIDDLEWARE = [
    # ...
    # 'django.contrib.messages.middleware.MessageMiddleware',
    "simple_history.middleware.HistoryRequestMiddleware",
]
```


## models.py
```py
from django.utils.translation import gettext_lazy as _
from django.db import models
from simple_history.models import HistoricalRecords


class MyTableName(models.Model):
    title = models.CharField(_("Title"), max_length=100)
    date = models.DateTimeField(_("Time"), auto_now_add=True)
    history = HistoricalRecords()
```


## views.py
```py
from my_new_app.models import MyTableName

my_object = MyTableName.objects.create(title="my title")
for story in my_object.history.all():
    print(story.id)
    # 55
    print(story.title)
    # my title
    print(story.date)
    # 2022-08-07 18:38:41.104268+00:00
    print(story.history_user)
    # asim
    print(story.history_date)
    # 2022-08-07 18:38:41.112865+00:00
    print(story.history_change_reason)
    # None
    print(story.history_id)
    # 36
    print(story.history_type)
    # +
    # + for create, ~ for update, and - for delete
```


## Querying history on a model
```py
from my_new_app.models import MyTableName


my_history = MyTableName.history.filter(id=30)

for story in my_history:
    print("history_id", story.history_id)
    print("history_type", story.history_type)
    print("id", story.id)
    print("title", story.title)
    print("history_user", story.history_user)
    print("date", story.date)
    print("history_date", story.history_date)
    print("="*88)

# history_id 24
# history_type ~
# id 30
# title 3333
# history_user None
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:17:06.705216+00:00
# ========================================================================================
# history_id 23
# history_type ~
# id 30
# title 3333
# history_user None
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:17:01.622165+00:00
# ========================================================================================
# history_id 22
# history_type ~
# id 30
# title 3333
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:15:41.505020+00:00
# ========================================================================================
# history_id 21
# history_type ~
# id 30
# title 3333
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:14:59.113554+00:00
# ========================================================================================
# history_id 20
# history_type ~
# id 30
# title 3333
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:14:46.989420+00:00
# ========================================================================================
# history_id 19
# history_type ~
# id 30
# title 3333
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:14:28.457318+00:00
# ========================================================================================
# history_id 18
# history_type ~
# id 30
# title 3333
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:13:53.004008+00:00
# ========================================================================================
# history_id 17
# history_type ~
# id 30
# title 2222
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:13:40.506561+00:00
# ========================================================================================
# history_id 3
# history_type +
# id 30
# title with h
# history_user asim
# date 2022-08-07 17:07:35.376949+00:00
# history_date 2022-08-07 17:07:35.414371+00:00
# ========================================================================================
```
