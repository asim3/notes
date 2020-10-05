## install docker-machine
```txt
curl -fLO https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-Linux-x86_64
curl -fLO https://github.com/docker/machine/releases/download/v0.16.2/sha256sum.txt

sha256sum --ignore-missing -c ./sha256sum.txt &&
rm                            ./sha256sum.txt &&
chmod +x ./docker-machine-Linux-x86_64 &&
sudo mv ./docker-machine-Linux-x86_64 /usr/local/bin/docker-machine && docker-machine version
```


## create new machine
```txt
docker-machine create my-node-1
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