# signals

```py
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
