## Service
> run only on a swarm manager.
```txt
sudo docker service ls
sudo docker service logs -f  my-DNS-name
sudo docker service inspect  my-DNS-name

sudo docker service ps       my-DNS-name
# OR
sudo docker stack   ps       my-stack-name 
```


## create
> **Replicated mode** : control the number of containers copies    
> **Global mode** : one copy of the container in every node
```txt
sudo docker service create --name my-DNS-name --mode global asim3/whoami:1.3
# OR
sudo docker service create --name my-DNS-name --replicas 2 \
    --publish published=8080,target=80 asim3/whoami:1.3
```


## update
```txt
sudo docker service create --name my-DNS-nginx nginx

sudo docker service update --publish-add  published=8081,target=80   my-DNS-nginx
sudo docker service update --publish-rm   published=80,target=80     my-DNS-nginx
```

## update
```txt
sudo docker service update 
      --hostname string                    Container hostname
      --image string                       Service image tag
  -u, --user string                        Username or UID (format: <name|uid>[:<group|gid>])
```


## update label
```txt
sudo docker service update 
      --env-add MY_ENV=asim,ENV2=aaa       Add or update an environment variable
      --env-rm list                        Remove an environment variable
      --label-add list                     Add or update a service label
      --label-rm list                      Remove a label by its key
      --network-add network                Add a network
      --network-rm list                    Remove a network
      --publish-add port                   Add or update a published port
      --publish-rm port                    Remove a published port by its target port
      --secret-add secret                  Add or update a secret on a service
      --secret-rm list                     Remove a secret
```


## update CPU
```txt
sudo docker service update 
      --limit-cpu decimal                  Limit CPUs
      --limit-memory bytes                 Limit Memory
      --reserve-cpu decimal                Reserve CPUs
      --reserve-memory bytes               Reserve Memory
      --replicas uint                      Number of tasks
      --replicas-max-per-node uint         Maximum number of tasks per node (default 0 = unlimited)
  -t, --tty                                Allocate a pseudo-TTY
```


## update logs
```txt
sudo docker service update 
      --log-driver string                  Logging driver for service
      --log-opt list                       Logging driver options
```


## manage
```txt
sudo docker service scale my-DNS-name=3
sudo docker service rm    my-DNS-name

#sudo docker service rollback 
```
