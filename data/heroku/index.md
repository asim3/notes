```txt
heroku -v
heroku login
```


## add new server
> Name must start with a letter, end with a letter or digit
> and can only contain lowercase letters, digits, and dashes.
```bash
heroku create __my-app__ 
heroku create __my-app__ --region eu
```


## list
```bash
heroku apps
```


## copy
```bash
heroku git:clone -a __my-app__
heroku git:remote -a __my-app__
```


## push to heroku
```txt
git push heroku master

heroku open
```


## delete
```bash
heroku apps:destroy -a __my-app__ 

heroku apps:destroy -a __my-app__ --confirm __my-app__
```
