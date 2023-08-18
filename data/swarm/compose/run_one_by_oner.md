## One By One
```yml
version: "3.8"

services:
  AAAAAAAA:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo AAAAAAAA"
  BBBBBBBB:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo BBBBBBBB"
  CCCCCCCC:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo CCCCCCCC"
  ZZZZZZZZ:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo ZZZZZZZZ"
```


## run
```bash
docker compose -f docker-compose.yml up

docker stack deploy -c docker-compose.yml test_one_by_one

docker service ls
# ID             NAME                       MODE         REPLICAS   IMAGE      
# r6pxs34x45yd   test_one_by_one_AAAAAAAA   replicated   0/1        busybox:stable
# wf0lrv6th15c   test_one_by_one_BBBBBBBB   replicated   0/1        busybox:stable
# zjk18riuqtwj   test_one_by_one_CCCCCCCC   replicated   0/1        busybox:stable
# vi47jz11juhu   test_one_by_one_ZZZZZZZZ   replicated   0/1        busybox:stable
```



## delete
```bash
docker compose -f docker-compose.yml down

docker stack rm test_one_by_one
```
