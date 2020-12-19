## browsable API
```txt
# Markdown support for the browsable API.
pip install markdown       

# Filtering support
pip install django-filter  
```


## Browsable API
```py
REST_FRAMEWORK = {
    # ...
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
}
```
