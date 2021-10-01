[docs](https://www.postgresql.org/docs/14/index.html)


## install
```bash
docker container prune -f

docker run \
    --name my_postgresql_container \
    -e POSTGRESQL_PASSWORD=my_pass \
    -d bitnami/postgresql:latest


docker exec -it my_postgresql_container bash


id
# uid=1001 gid=0(root) groups=0(root)


psql
# psql: local user with ID 1001 does not exist


psql --username=postgres
psql -U         postgres
# Password for user postgres: my_pass
```


## list db
> `\l`
```sql
\l

--                                   List of databases
--    Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-- -----------+----------+----------+-------------+-------------+-----------------------
--  postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
--  template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
--            |          |          |             |             | postgres=CTc/postgres
--  template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
--            |          |          |             |             | postgres=CTc/postgres
-- (3 rows)
```
