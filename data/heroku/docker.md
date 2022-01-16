## setup
```bash
heroku stack:set container -a __app__


cat <<-EOF > ./heroku.yml
build:
  docker:
    web: Dockerfile

EOF
```

> Heroku uses dynamic ports you should use the environment variable `export PORT`


### fix rm in docker not working
```bash
heroku labs:enable --app=__app__ runtime-new-layer-extract
```
