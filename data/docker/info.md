## Run
```sh
docker run -it alpine:3 sh
```


## Memory
> My PC RAM: 32GB
```sh
docker run -it alpine:3 free -h
#               total        used        free      shared  buff/cache   available
# Mem:          31.2G        4.0G        7.7G      101.9M       19.5G       26.7G
# Swap:          9.8G       10.8M        9.8G


docker run -it alpine:3 cat /proc/meminfo | grep Mem
# MemTotal:       32763172 kB 
# MemFree:         8126300 kB
# MemAvailable:   28019044 kB
```


## CPU Info
> My PC CPU: 20
```sh
docker run -it alpine:3 nproc --all
# 20


docker run -it alpine:3 cat /proc/cpuinfo | grep processor
# processor	: 0
# processor	: 1
# processor	: 2
# processor	: 3
# processor	: 4
# processor	: 5
# processor	: 6
# processor	: 7
# processor	: 8
# processor	: 9
# processor	: 10
# processor	: 11
# processor	: 12
# processor	: 13
# processor	: 14
# processor	: 15
# processor	: 16
# processor	: 17
# processor	: 18
# processor	: 19
```


## Processes
```sh
docker run -it alpine:3 ps aux
# PID   USER     TIME  COMMAND
#     1 root      0:00 sh
#    42 root      0:00 ps aux


# display a tree of processes
docker run -it busybox:stable pstree
# sh---pstree
```
