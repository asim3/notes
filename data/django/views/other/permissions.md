`nano permissions.py`
```py
from django.contrib.auth.mixins import PermissionRequiredMixin


class SortPermissionMixin(PermissionRequiredMixin):
    permission_required = "student.change_casestudy"


class ControlPermissionMixin(PermissionRequiredMixin):
    permission_required = "control.change_readmissioncycles"
```
