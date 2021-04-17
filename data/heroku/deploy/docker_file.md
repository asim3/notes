[docs](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)

## Building Dockerfile 
Build your Docker images with heroku.yml


## setup
```bash
heroku create asim4-docker --region eu

# set app stack to container
heroku stack:set container -a asim4-docker
```


## heroku.yml
`cat <<eof > ./heroku.yml`
```yaml
build:
  docker:
    web: Dockerfile
```
> If you don’t include a `run` section,
> Heroku uses the `CMD` specified in the `Dockerfile`.



## commit
```bash
git add .
git commit -m 'added: heroku.yml'
git push heroku master
```


## open
```bash
curl https://asim4-docker.herokuapp.com/
# Hello world!
```
