## Deploying with Docker
[docs](https://devcenter.heroku.com/articles/container-registry-and-runtime)


## login
```bash
# run docker as user
sudo usermod -aG docker $USER
# logout then login

heroku login

# log in to Heroku Container Registry
heroku container:login
```


## copy `hello world `
```bash
heroku create asim3-docker

git clone https://github.com/heroku/alpinehelloworld.git && cd alpinehelloworld
```


## release
pre-built Docker images
```bash
# push to Heroku Container Registry
heroku container:push web -a asim3-docker

heroku container:release web -a asim3-docker
```


```bash
curl https://asim3-docker.herokuapp.com/
# Hello world!
```
