## Arbitrary order
```py
from django.utils.translation import gettext_lazy as _
from django.db import models


class Question(models.Model):
    text = models.CharField(_("Question Text"), max_length=250)


class Answer(models.Model):
    text = models.CharField(_("Answer Text"), max_length=250)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    class Meta:
        order_with_respect_to = 'question'
```


## get order
```py
obj = Question.objects.first()

obj.get_answer_order().count()
# 3

type(obj.get_answer_order().first())
# <class 'int'>

obj.get_answer_order()
# <QuerySet [1, 2, 3]>
```


## set order
```py
obj = Question.objects.first()

obj.get_answer_order()
# <QuerySet [1, 2, 3]>

obj.set_answer_order([2, 1, 3])

obj.get_answer_order()
# <QuerySet [2, 1, 3]>
```
