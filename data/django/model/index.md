```python
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

class TableName(models.Model):

    class YearInSchool(models.TextChoices):
        FRESHMAN  = 'FR', _('Freshman')
        SOPHOMORE = 'SO', _('Sophomore')
        JUNIOR    = 'JR', _('Junior')
        SENIOR    = 'SR', _('Senior')
        GRADUATE  = 'GR', _('Graduate')

    year_in_school = models.CharField(
        max_length=2,
        choices=YearInSchool.choices,
        default=YearInSchool.FRESHMAN,
    )

    my_id = models.IntegerField()
    or_id = models.IntegerField(blank=True,null=True)
    title = models.CharField(_("العنوان"), max_length=100)
    is_new = models.BooleanField(blank=True, null=True)
    gpa = models.DecimalField(max_digits=3, decimal_places=2)
    desc = models.TextField()
    
    #  set to now when the object is first created
    added_date = DateTimeField(auto_now_add=True)

    # update every time the object is saved
    update_date = DateTimeField(auto_now=True)
```


## File
```python
profile = models.ImageField(upload_to=get_image_path, blank=True, null=True)

upload = models.FileField(upload_to='uploads/') # MEDIA_ROOT/uploads
upload = models.FileField(upload_to='uploads/%Y/%m/%d/') # MEDIA_ROOT/uploads/2015/01/30

upload = models.FilePathField(path="/home/images", match="foo.*", recursive=True)
```


## file upload_to
```py
import os
def get_upload_path(instance, filename):
    user = "user_%d" % instance.owner.id
    return os.path.join(user, filename)


upload = models.FileField(upload_to=get_upload_path)
```


## One To One
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

    current_user = ForeignKey(User, related_name='owner')

    staff_member = ForeignKey(
        User, on_delete=CASCADE, limit_choices_to={'is_staff': True},)
```


## Many To Many
```python
friends = models.ManyToManyField("self", symmetrical=False)


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
list_items = ( 
    ('1','item 1'),  
    ('2','item 2'), 
)
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
from django.urls import reverse


class MyThing(models.Model):
    title = models.CharField(max_length=100)

    class Meta:
        ordering = ["title"]
        verbose_name = _('Pledge')
        verbose_name_plural = _("Pledge's")
        permissions = [
            ("export_to_excel", "Can export data to excel file"),
        ]

    def __str__(self):
        return self.title

    # choices text
    def __str__(self):
        semester = dict(self.YearInSchool.choices()).get(str(self.year_in_school))
        return "%s %s" % (self.year, semester)
    

    def get_absolute_url(self):
        # return f"/show/{self.id}/"
        # OR
        return reverse("url_name", kwargs={"pk": self.id})
        # to display in templates {{ obj.get_absolute_url }}

    def snippet(self):
        # limit title to 50 chars
        return self.title[:50] + '...'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        print('\n\n', self.title, '\n\n')

    def clean(self):
        """
        Hook for doing any extra model-wide validation after clean() has been
        called on every field by self.clean_fields. Any ValidationError raised
        by this method will not be associated with a particular field; it will
        have a special-case association with the field defined by NON_FIELD_ERRORS.
        """
        pass

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields["title"].label = "title my get_form label:"
        return form
    
    def _do_insert(self, *args, **kwargs):
        return super()._do_insert(*args, **kwargs)

    def _do_update(self, *args, **kwargs):
        return super()._do_update(*args, **kwargs)

    def delete(self, *args, **kwargs):
        return super().delete(*args, **kwargs)
```


## File Validator
File Extension Validator
```python
from django.core.validators import FileExtensionValidator

  file = models.FileField(upload_to='font/', blank=True, null=True,
    validators=[FileExtensionValidator(allowed_extensions=['xml', 'ttp', 'svg'])])
```
