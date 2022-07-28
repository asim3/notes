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
from my_new_app.models import Question, Answer


q1, _ = Question.objects.get_or_create(text="Question 1")
q2, _ = Question.objects.get_or_create(text="Question 2")
a1, _ = Answer.objects.get_or_create(text="Answer 1", question=q1)
a2, _ = Answer.objects.get_or_create(text="Answer 2", question=q1)
a3, _ = Answer.objects.get_or_create(text="Answer 3", question=q1)


q1.get_answer_order().count()
# 3

q2.get_answer_order().count()
# 0

type(q1.get_answer_order().first())
# <class 'int'>

q1.get_answer_order()
# <QuerySet [1, 2, 3]>
```


## set order
```py
q1.set_answer_order([2, 1, 3])
q1.get_answer_order()
# <QuerySet [2, 1, 3]>

q1.set_answer_order([3, 2, 4, 1, 5, ])
q1.get_answer_order()
# <QuerySet [3, 2, 1]>


q1.set_answer_order([1, ])
q1.get_answer_order()
# <QuerySet [1, 3, 2]>

# Q2
q2.set_answer_order([2, 1, 3])
q2.get_answer_order()
# <QuerySet []>
```
