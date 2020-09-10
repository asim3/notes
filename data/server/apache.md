```txt
sudo apt-get install apache2 
sudo apt-get install libapache2-mod-wsgi-py3
```


```txt
cd /etc/apache2/sites-available/
sudo cp 000-default.conf django_project.conf
sudo nano django_project.conf 
```


`nano /etc/apache2/sites-available/django_project.conf `
```xml
<VirtualHost *:80>
    # ...

    # static URL
    Alias /static /home/asim/my_django_project/static
    <Directory /home/asim/my_django_project/static>
        Require all granted
    <Directory>

    # media URL
    Alias /media /home/asim/my_django_project/media
    <Directory /home/asim/my_django_project/media>
        Require all granted
    <Directory>

    <Directory /home/asim/my_django_project/my_django_project>
        <Files wsgi.py>
            Require all granted
        </Files>
    <Directory>

    WSGIScriptAlias / /home/asim/my_django_project/my_django_project/wsgi.py 
    WSGIDaemonProcess django_app python-path=/home/asim/my_django_project python-home=/home/asim/my_django_project/venv
    WSGIProcessGroup django_app

</VirtualHost>
```


```txt
sudo a2ensite django_project
sudo a2dissite 000-default.conf
```


## file permissions
```txt
sudo chown :www-data my_django_project/
sudo chmod 775 my_django_project/

sudo chown :www-data my_django_project/db.sqlite3
sudo chmod 664 my_django_project/db.sqlite3

sudo chown -R :www-data my_django_project/media/
sudo chmod 775 my_django_project/media 

ls -la
```


## run server
```txt
sudo ufw delete allow 8000
sudo ufw allow http/tcp
sudo service apache2 restart
# done 
```


[Deployment checklist](https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/)
