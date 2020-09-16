
## run
> `docker service create` run only on a swarm manager.    
```txt
sudo docker container run 
    --name my-container_name

    -e MYKEY=my_environment_variables

    # Run in background
    -d

    # Publish or expose ports
    -p 80:80

    # Publish all exposed ports to random ports
    -P

    # mount volume
    -v ~/my_file/:/container_file/
    -v ~/my_logs/:/container_logs/

    --mount source=myvol2,target=/app
    
    asim3/whoami:1.3
```


## stop containers
```txt
sudo docker container start    __id__
sudo docker container restart  __id__

sudo docker container pause    __id__
sudo docker container unpause  __id__

sudo docker container stop     __id__
sudo docker container kill     __id__
sudo docker container rm       __id__
```
