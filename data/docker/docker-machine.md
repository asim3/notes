## install docker-machine
```txt
curl -L https://github.com/docker/machine/releases/download/v0.16.0/docker-machine-$(uname -s)-$(uname -m) > /tmp/docker-machine

sudo mv /tmp/docker-machine /usr/local/bin/docker-machine
chmod +x /usr/local/bin/docker-machine
```


## create new machine
```txt
docker-machine create 
    --virtualbox-cpu-count "1"
    --virtualbox-memory "1024"    
    --driver "virtualbox" my-node-1
```


```txt
docker-machine ls
docker-machine ip my-node-1
docker-machine ssh my-node-1

docker-machine status my-node-1
docker-machine status my-node-1

docker-machine start my-node-1
docker-machine stop my-node-1
docker-machine rm my-node-1
```


## cupy context
```txt
docker-machine env my-node-1
```