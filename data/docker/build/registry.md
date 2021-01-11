# Docker Registry

## Run a local registry
```bash
sudo docker run -d -p 5000:5000 --restart always --name my-registry registry:2

sudo docker container ls
```


## push to a local registry
```bash
sudo docker pull ubuntu
sudo docker images

# copy ubuntu image
sudo docker tag ubuntu localhost:5000/ubuntu
sudo docker push localhost:5000/ubuntu
```


## pull from a local registry
```bash
sudo docker pull localhost:5000/ubuntu
```
