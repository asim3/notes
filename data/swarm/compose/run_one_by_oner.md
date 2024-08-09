## `compose up`
```yml
version: "3.8"

services:
  AAAAAAAA:
    image: busybox:stable
    restart: on-failure
    entrypoint:
      - "/bin/sh"
      - "-c"
      - "echo AAAAAAAA"
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin --password=root  status"]
      start_period: 10s # Probe failure during this period will not be counted
      interval: 30s # waiting periods between each command
      timeout: 3s # health check command timeout
      retries: 3

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
      AAAAAAAA:
        condition: service_healthy
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
    image: busybox:1.33
    # image: busybox:1.36
    entrypoint: ["/bin/sh", "-c", "echo AAAAAAAA; sleep 15m;"]
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
        max_attempts: 5
        delay: 15s
      update_config:
        parallelism: 1
        delay: 5m
        monitor: 5m
        order: start-first
        failure_action: rollback
      rollback_config:
        parallelism: 1
        delay: 5m
        monitor: 5m
        max_failure_ratio: 3
```


## run
```bash
docker stack deploy -c docker-compose.yml test_one_by_one

docker stack ps test_one_by_one

docker service logs test_one_by_one_AAAAAAAA

# delete
docker stack rm test_one_by_one
```
