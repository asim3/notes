## Networks
```txt
sudo docker network create web
sudo docker network ls
```


## Volumes
```txt
sudo docker volume create --name=wordpress
sudo docker volume ls
```


## Push Image
Push Image to Docker Hub
> sudo apt-get install pass gnupg2
```txt
sudo docker commit __id__ asim3/my-image-1:mytag

sudo docker login

sudo docker push asim3/my-image-1:mytag
```
