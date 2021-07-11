# secrets
```bash
# list
heroku config -a delete-4

# get
heroku config:get GITHUB_USERNAME -a delete-4

# set
heroku config:set GITHUB_USERNAME=joesmith -a delete-4

# remove
heroku config:unset GITHUB_USERNAME -a delete-4
```
