## Downloading Files
```python
import requests

url = 'http://google.com/favicon.ico'
r = requests.get(url, allow_redirects=True)
if r.ok:
    open('google.ico', 'wb').write(r.content)
```


```python
def is_downloadable(url):
    h = requests.head(url, allow_redirects=True)
    header = h.headers
    content_type = header.get('content-type')
    if 'text' in content_type.lower():
        return False
    if 'html' in content_type.lower():
        return False
    return True
```
