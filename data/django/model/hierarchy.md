[raw SQL queries](https://docs.djangoproject.com/en/3.2/topics/db/sql/)


## Ancestors
```py
from django.utils.translation import gettext_lazy as _
from django.db import models


class Employee(models.Model):
    FirstName = models.CharField(_("First Name"), max_length=250)
    LastName = models.CharField(_("Last Name"), max_length=250)
    Manager = models.ForeignKey(
        "self", on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.FirstName + " " + self.LastName + " " + self.get_hierarchy_level()

    @classmethod
    def _ancestors(cls, id):
        ANCESTORS_QUERY = """
            WITH RECURSIVE MyLoop AS (
                    SELECT *, 1 AS h_level 
                    FROM my_new_app_Employee WHERE ID = %s
                UNION ALL
                    SELECT my_new_app_Employee.*, MyLoop.h_level + 1 AS h_level 
                    FROM MyLoop, my_new_app_Employee
                    WHERE MyLoop.Manager_id = my_new_app_Employee.ID
            )
            SELECT * FROM MyLoop;
        """
        return cls.objects.raw(ANCESTORS_QUERY, params=[id, ])

    def ancestors(self):
        return tuple(self._ancestors(self.id))

    def get_hierarchy_level(self):
        return str(getattr(self, "h_level", ""))
```
