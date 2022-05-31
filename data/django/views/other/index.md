## messages
```py
from django.contrib import messages


messages.debug(request, '%s SQL statements were executed.' % count)
messages.info(request, 'Three credits remain in your account.')
messages.success(request, 'Profile details updated.')
messages.warning(request, 'Your account expires in three days.')
messages.error(request, 'Document deleted.')
```


## messages template
```jinja
{% if messages %}
<ul class="messages">
    {% for message in messages %}
    <li{% if message.tags %} class="{{ message.tags }}"{% endif %}>{{ message }}</li>
    {% endfor %}
</ul>
{% endif %}
```


## messages test
```py

    def test_messages(self):
        response = self.client.get(reverse("control"))
        self.assertEqual(response.status_code, 200)
        messages = []
        for msg in list(response.context['messages']):
            messages.append(str(msg))

        self.assertEqual(len(messages), 2)
        self.assertIn(_('site settings has been reset'), messages)
        self.assertIn(_('Students details has been updated.'), messages)
```


## Base64 img
```python
from django.core.files.base import ContentFile
import base64


def get_base64_img(base64_text):
    try:
        format, base64_img = base64_text.split(';base64,')
        ext = format.split('/')[-1]
        return ContentFile(base64.b64decode(base64_img), name='temp.' + ext)
    except:
        return None
```
