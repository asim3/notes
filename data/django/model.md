```python
from django.utils import timezone

class TableName(models.Model):
  my_id = models.IntegerField()
  or_id = models.IntegerField(blank=True,null=True)
  title = models.CharField("العنوان", max_length=100)
  desc = models.TextField()

  year = models.DateField()
  date = models.DateTimeField(default=timezone.now)
  date = models.DateTimeField(auto_now=True) # update every time the object is saved
  date = models.DateTimeField(auto_now_add=True) #  set to now when the object is first created
  kfupm_gpa = models.DecimalField(
        "المعدل التراكمي", max_digits=3, decimal_places=2,
        blank=True, null=True
        )
    academic_status = models.CharField(
        "وضع الطالب الأكاديمي", max_length=10,
        choices=( ('Suspended', 'موقوف عن الدراسة'), ('Withdrawn', 'منسحب'), ),
        )
  fk_student = models.ForeignKey(StudentModel, on_delete=models.CASCADE)
  is_there_reports = models.BooleanField("هل لديك تقارير؟", blank=True, null=True)
```


```python
profile = models.ImageField(upload_to=get_image_path, blank=True, null=True)

upload = models.FileField(upload_to='uploads/') # MEDIA_ROOT/uploads
upload = models.FileField(upload_to='uploads/%Y/%m/%d/') # MEDIA_ROOT/uploads/2015/01/30

upload = models.FilePathField(path="/home/images", match="foo.*", recursive=True)
```


## Foreign Key
```python
staff_member = models.ForeignKey(
  User,
  on_delete=models.CASCADE,
  limit_choices_to={'is_staff': True},
)
```


```python
friends = models.ManyToManyField("self", symmetrical=False)
current_user = models.ForeignKey(User, related_name='owner')
```


```python
supervisor = models.OneToOneField(
    settings.AUTH_USER_MODEL,
    on_delete=models.CASCADE,
    related_name='supervisor_of',
)
```


## Foreign Key
```python
from django.contrib.auth.models import User
  user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
  com = models.ForeignKey(_t2_ , on_delete=models.CASCADE)
  class = models.ManyToManyField(_t3_)
```


## Many To Many
```python
class Pizza(models.Model):
  name = models.CharField(max_length=30)
  toppings = models.ManyToManyField('Topping', related_name='pizza_set')

class Topping(models.Model):
  name = models.CharField(max_length=30)

# ^^^
pineapple = Topping(name='pineapple')
pineapple.save()
hawaiian_pizza = Pizza.objects.create(name='Hawaiian')
hawaiian_pizza.toppings.add(pineapple)
hawaiian_pizza.toppings.all()

pineapple.pizza_set.all() # default name: model_name + '_set'

Pizza.objects.filter(toppings__name__startswith='p')
Topping.objects.filter(pizza_set__name__contains='Hawaiian')
```


[Tips for Using M2M Field]
(https://www.revsys.com/tidbits/tips-using-djangos-manytomanyfield/)


## Drop down box
```python
  list_items = ( ('1','item 1'),  ('2','item 2'), )
  list = models.CharField(max_length=100, choices= list_items)
```


## available arguments
The following arguments are available to all field types. All are optional.
```python
title = models.CharField(
  "العنوان",
  verbose_name='العنوان',
  blank=True,     #  validation-related
  null=True,      # database-related
  editable=False, #  will not be displayed in the admin or any other
  default='A',
  max_length=2,
  choices=( ('A', 'Junior'), ('B', 'Senior'), ),
  help_text="format: <em>YYYY-MM-DD</em>."
  primary_key=True,
  unique=True,
  db_index=True,
  db_column='db_column_name',
)
```


## models functions
```python
def __str__(self):
  return self.title
```


```python
from django.urls import reverse

def get_absolute_url(self):
  # return f"/show/{self.id}/"
  # or
  return reverse("url_name", kwargs={"pk": self.id})
  # to display in templates {{ obj.get_absolute_url }}
```


```python
def snippet(self):
  return self.title[:50] + '...'
```


## File Validator
File Extension Validator
```python
from django.core.validators import FileExtensionValidator

  file = models.FileField(upload_to='font/', blank=True, null=True,
    validators=[FileExtensionValidator(allowed_extensions=['xml', 'ttp', 'svg'])])
```


## Translation
```python
from django.utils.translation import gettext_lazy as _

class MyThing(models.Model):
    name = models.CharField(help_text=_('This is the help text'))
```