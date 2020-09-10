## Virtual Environments

## add
```
sudo apt-get install python3-venv
python3 -m venv ~/venv

# run 
source ~/venv/bin/activate

pip3 install Django
pip3 install -r requirements.txt

deactivate
```


```
django-admin startproject my_name
python manage.py startapp app_name
python manage.py collectstatic
python manage.py runserver

python manage.py makemigrations && python manage.py migrate
python manage.py createsuperuser
```


## Translation
```
mkdir locale
python3 manage.py makemessages -l ar
```
