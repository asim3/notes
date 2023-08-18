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
    restart: on-failure
    deploy:
      restart_policy:
        condition: on-failure

  BBBBBBBB:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo BBBBBBBB"
    restart: on-failure
    depends_on:
      AAAAAAAA:
        condition: service_completed_successfully
    deploy:
      restart_policy:
        condition: on-failure

  CCCCCCCC:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo CCCCCCCC"
    restart: on-failure
    depends_on:
      BBBBBBBB:
        condition: service_completed_successfully
    deploy:
      restart_policy:
        condition: on-failure

  ZZZZZZZZ:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo ZZZZZZZZ"
    restart: on-failure
    depends_on:
      CCCCCCCC:
        condition: service_completed_successfully
    deploy:
      restart_policy:
        condition: on-failure

```


## run
```bash
docker compose -f docker-compose.yml up
# stacks-AAAAAAAA-1  | AAAAAAAA
# stacks-AAAAAAAA-1 exited with code 0
# stacks-BBBBBBBB-1  | BBBBBBBB
# stacks-BBBBBBBB-1 exited with code 0
# stacks-CCCCCCCC-1  | CCCCCCCC
# stacks-CCCCCCCC-1 exited with code 0
# stacks-ZZZZZZZZ-1  | ZZZZZZZZ
# stacks-ZZZZZZZZ-1 exited with code 0


docker stack deploy -c docker-compose.yml test_one_by_one

docker service ls
# ID             NAME                       MODE         REPLICAS   IMAGE      
# r6pxs34x45yd   test_one_by_one_AAAAAAAA   replicated   0/1        busybox:stable
# wf0lrv6th15c   test_one_by_one_BBBBBBBB   replicated   0/1        busybox:stable
# zjk18riuqtwj   test_one_by_one_CCCCCCCC   replicated   0/1        busybox:stable
# vi47jz11juhu   test_one_by_one_ZZZZZZZZ   replicated   0/1        busybox:stable

docker service logs test_one_by_one_AAAAAAAA
```



## delete
```bash
docker compose -f docker-compose.yml down

docker stack rm test_one_by_one
```
