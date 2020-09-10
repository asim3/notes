# Deploy Django

## copy django files from local pc to server
```bash
scp -r my_django_project username@remote.server.ip:~/
```


## from the server
`ssh username@remote.server.ip`
```bash
sudo apt-get install python3-pip
sudo apt-get install python3-venv
python3 -m venv my_django_project/venv
cd my_django_project/
source venv/bin/activate
pip install -r requirements.txt 
nano my_django_project/settings.py 
```


`nano my_django_project/settings.py`
```python
ALLOWED_HOSTS = ['192.168.1.1']
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```


```bash
python3 manage.py collectstatic
python3 manage.py runserver 0.0.0.0:8000
```
> test server @ `192.168.1.1:8000`