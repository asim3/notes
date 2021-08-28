## Add new page
```py
from wagtail.core.models import Page
from categories.models import BrandPage


parent_page = Page.objects.get(slug="home")

parent_page.add_child(instance=BrandPage(title="asim new cli 7"))

parent_page.add_sibling(instance=BrandPage(title="asim new cli 7"))
```
