## Add new page
```py
from wagtail.core.models import Page
from categories.models import BrandPage


parent_page = Page.objects.get(slug="home")

parent_page.add_child(instance=BrandPage(title="asim new cli 7"))

parent_page.add_sibling(instance=BrandPage(title="asim new cli 7"))
```



## with an image
```py
from wagtail.core.models import Page
from wagtail.images.models import Image

from categories.models import BrandPage



parent_page = Page.objects.get(slug="home").specific

image = Image.objects.create(title=obj.name, file=obj.image)

news_page = BrandPage(title="My Title", slug="my-slug", image=image)

parent_page.add_child(instance=news_page)

news_page.save_revision().publish()
```
