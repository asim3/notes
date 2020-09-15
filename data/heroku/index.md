```txt
heroku -v
heroku login
heroku apps
heroku create _
heroku git:clone -a _
heroku git:remote -a _
heroku apps:destroy -a _
```


commit changes
```txt
git init
git add .

git commit -m "init commit"

git push heroku master

git status
```


push to heroku
```txt
git push heroku master

heroku open
```


database info
```txt
heroku pg:info -a _
watch "heroku pg:info -a _"
```


scale Dynos
```txt
heroku ps:scale web=1 -a _
```


Run app locally
```txt
heroku local web

# pg_config is in postgresql-devel 
# libpq-dev in Debian/Ubuntu
# libpq-devel on Cygwin/Babun

sudo apt install -y libpq-dev 
```


other
```txt
heroku access
```
