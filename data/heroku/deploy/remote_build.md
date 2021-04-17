[docs](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)

## remote build
Build your Docker images with heroku.yml after 
pushing you code to Heroku Container Registry


## copy `hello world`
```bash
heroku create asim4-docker --region eu

git clone https://github.com/heroku/alpinehelloworld.git && cd alpinehelloworld
|
├── Dockerfile
└── webapp
    ├── app.py
    ├── requirements.txt
    ├── tests.py
    └── wsgi.py
```


## set stack
set app stack to container
```bash
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
