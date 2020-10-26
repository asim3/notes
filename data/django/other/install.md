## Virtual Environments
```txt
sudo apt-get install -y python3-venv
python3 -m venv ~/venv
```


## run 
```txt
source ~/venv/bin/activate

pip3 install Django

pip3 freeze > requirements.txt

pip3 install -r requirements.txt

deactivate
```


## django manage
```txt
django-admin startproject my_name
python manage.py startapp app_name
python manage.py collectstatic
python manage.py runserver

python manage.py makemigrations && python manage.py migrate
python manage.py createsuperuser
```
