## `compose up`
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


# delete
docker compose -f docker-compose.yml down
```


## Stack
```yml
version: "3.8"

services:
  AAAAAAAA:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo AAAAAAAA"
    deploy:
      restart_policy:
        condition: on-failure

  BBBBBBBB:
    image: busybox:stable
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo BBBBBBBB"
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
    depends_on:
      CCCCCCCC:
        condition: service_completed_successfully
    deploy:
      restart_policy:
        condition: on-failure

```


## run
```bash
docker stack deploy -c docker-compose.yml test_one_by_one

docker stack ps test_one_by_one

docker service logs test_one_by_one_AAAAAAAA

# delete
docker stack rm test_one_by_one
```
