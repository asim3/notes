```txt
heroku -v
heroku login
```


## add
> Name must start with a letter, end with a letter or digit
> and can only contain lowercase letters, digits, and dashes.
```bash
heroku create __app__ 
heroku create __app__ --region eu
```


## list
```bash
heroku apps
```


## copy
```bash
heroku git:clone -a __app__
heroku git:remote -a __app__
```


## push to heroku
```txt
git push heroku master

heroku open
```


## delete
```bash
heroku apps:destroy -a __app__ 

heroku apps:destroy -a __app__ --confirm __app__
```
