## signal
```py
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models.signals import post_save


class MyTableName(models.Model):
    title = models.CharField(_("Title"), max_length=100)
    date = models.DateTimeField(_("Time"), auto_now_add=True)


def add_new_event(sender, instance, **kwargs):
    print("sender", sender)
    # <class 'my_new_app.models.MyTableName'>

    print("instance", instance)
    # MyTableName object (27)

    print("kwargs", kwargs)
    # {'signal': <django.db.models.signals.ModelSignal object at 0x7f1b2a9501c0>, 'created': True, 'update_fields': None, 'raw': False, 'using': 'default'}
    # {'signal': <django.db.models.signals.ModelSignal object at 0x7f9c1ce511c0>, 'created': False, 'update_fields': None, 'raw': False, 'using': 'default'}


post_save.connect(add_new_event, sender=MyTableName)
```


## send_mail signal
```py
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models.signals import post_save
from django.core.mail import send_mail


class MyModel(models.Model):
    name = models.CharField(_("name"), max_length=25)
    email = models.EmailField(_("email"), max_length=100)



def notify_user(sender, instance, **kwargs):
    school = instance.get_school_display()
    subject = 'شكرا لك على التسجيل'
    message = f' شكرا {instance.name} . '
    recipient_list = [instance.email, ]
    send_mail(subject, message, None, recipient_list, fail_silently=False)


post_save.connect(notify_user, sender=MyModel)
```
