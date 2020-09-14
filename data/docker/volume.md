## Volumes
```txt
sudo docker volume create --name=wordpress
sudo docker volume ls
```

> If you linked an empty volume, it will override all original container files.
  Meaning: empty volume = empty directory
```txt
sudo docker volume inspect my-vol
sudo docker volume rm      my-vol
```