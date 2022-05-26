`nano permissions.py`
```py
from django.contrib.auth.mixins import PermissionRequiredMixin


class SortPermissionMixin(PermissionRequiredMixin):
    permission_required = "student.change_casestudy"


class ControlPermissionMixin(PermissionRequiredMixin):
    permission_required = "control.change_readmissioncycles"
```


## Custom permissions
```py
from django.utils.translation import gettext_lazy as _
from django.db.models import Model


class AdminAndStaff(Model):

    class Meta:
        permissions = [
            ("view_all_students", _("Can view all students")),
            ("view_all_advisors", _("Can view all advisors")),
        ]


self.request.user.has_perm('app_name.add_new_task')
# False

self.request.user.has_perm('advisor.view_all_students')
# True

self.request.user.has_perm('advisor.view_all_advisors')
# True
```


## all Permission
```py
from django.contrib.auth.models import Permission


for permission in Permission.objects.all():
    print(f"{permission.content_type.app_label}.{permission.codename}")
```
