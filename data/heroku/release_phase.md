# Release Phase
`nano Procfile`
```bash
release: # will be overwritten by next
release: cd __app__ && python manage.py migrate

web: gunicorn myproject.wsgi
```


## pre compile
`nano bin/pre_compile`
```bash
#!/bin/bah

echo "pre compile"
```


## post compile
`nano bin/post_compile`
```bash
#!/bin/bah

echo "post compile"
```
