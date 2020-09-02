```  bash
heroku -v
heroku login
heroku apps
heroku create _
heroku git:clone -a _
heroku git:remote -a _
heroku apps:destroy -a _
```


commit changes
```  bash
git init
git add .

git commit -m "init commit"

git push heroku master

git status
```


push to heroku
```  bash
git push heroku master

heroku open
```


database info
```  bash
heroku pg:info -a _
watch "heroku pg:info -a _"
```


scale Dynos
```  bash
heroku ps:scale web=1 -a _
```


Run app locally
```  bash
heroku local web

# pg_config is in postgresql-devel 
# libpq-dev in Debian/Ubuntu
# libpq-devel on Cygwin/Babun

sudo apt install libpq-dev 
```


other
```  bash
heroku access
```
