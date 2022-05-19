## annotate
[docs](https://docs.djangoproject.com/en/3.2/topics/db/aggregation/)

```py
from django.db.models import Count, Max, Min, Sum, Avg
```


## GROUP BY
```py
from django.contrib.auth.models import User
from django.db.models import Count


data = User.objects.values("id").annotate(my_count=Count('id'))

print(data.query)
# SELECT 
#     "auth_user"."id", 
#     COUNT("auth_user"."id") AS "my_count" 
# FROM "auth_user" 
# GROUP BY "auth_user"."id"


User.objects.values("date_joined", "pk").annotate(my_count=Count('pk'))
# SELECT 
#     "auth_user"."date_joined", 
#     "auth_user"."id", 
#     COUNT("auth_user"."id") AS "my_count" 
# FROM "auth_user" 
# GROUP BY "auth_user"."date_joined", "auth_user"."id"
```


## GROUP BY Year
```py
from django.contrib.auth.models import User
from django.db.models.functions import ExtractWeek, ExtractYear
from django.db.models import Count, Max, Min, Sum, Avg


User.objects.annotate(my_year=ExtractYear('date_joined')).values("my_year")
# SELECT 
#     django_datetime_extract('year', "auth_user"."date_joined", 'Asia/Riyadh', 'UTC') AS "my_year" 
# FROM "auth_user"

# {'my_year': 2021}
# {'my_year': 2021}
# {'my_year': 2021}
# {'my_year': 2021}


User.objects
    .annotate(my_year=ExtractYear('date_joined'))
    .values("my_year")
    .annotate(my_count=Count('my_year'))
# {'my_year': 2021, 'my_count': 4}
```


## GROUP BY Week
```py
from django.contrib.auth.models import User
from django.db.models.functions import ExtractWeek, ExtractYear
from django.db.models import Count


User.objects
    .annotate(my_year=ExtractYear('date_joined'))
    .annotate(my_week=ExtractWeek('date_joined'))
    .values("my_year", "my_week")
    .annotate(my_count=Count('pk'))

# {'my_year': 2021, 'my_week': 28, 'my_count': 1}
# {'my_year': 2021, 'my_week': 34, 'my_count': 1}
# {'my_year': 2021, 'my_week': 46, 'my_count': 2}
```


## Min & Max
```py
from django.db.models import Max, Min


Store.objects.annotate(
    min_price=Min('books__price'), 
    max_price=Max('books__price'),
)
```
