## Database
```sql
create database my_db_1 ;
create database my_db_2 ;

CREATE DATABASE my_database;
DROP   DATABASE my_database;

USE my_db_2;


\l
--                                   List of databases
--    Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-- -----------+----------+----------+-------------+-------------+-----------------------
--  my_db_1   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
--  my_db_2   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
--  postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
--  template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
--            |          |          |             |             | postgres=CTc/postgres
--  template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
--            |          |          |             |             | postgres=CTc/postgres
-- (5 rows)
```
> when a new `db` is created, new default `public schema` will be added



## test public schema
```sql
create user my_user with encrypted password 'pass';

\du
--                                    List of roles
--  Role name |                         Attributes                         | Member of 
-- -----------+------------------------------------------------------------+-----------
--  my_user   |                                                            | {}
--  postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```



## login to DB 1 & DB 2
`psql -U my_user -d my_db_1`
```sql
\c my_db_2
-- You are now connected to database "my_db_2" as user "my_user".


\du
--                                    List of roles
--  Role name |                         Attributes                         | Member of 
-- -----------+------------------------------------------------------------+-----------
--  my_user   |                                                            | {}
--  postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}


\dt
-- Did not find any relations.


CREATE TABLE MyTable (Name varchar(255), Age int);
-- CREATE TABLE


\dt
--          List of relations
--  Schema |  Name   | Type  |  Owner  
-- --------+---------+-------+---------
--  public | mytable | table | my_user
-- (1 row)
```
> all users have the `CREATE` and `USAGE` on the public schema


## copy
```sql
CREATE DATABASE my_db_test WITH TEMPLATE my_db;
-- ERROR:  source database "dvdrental" is being accessed by other users
-- DETAIL:  There is 1 other session using the database.
```


## backup
```sql
-- pg_dump cli
pg_dump -U postgres -d my_db -f my_db.sql


CREATE DATABASE my_db_test;


-- pg_dump cli
psql -U postgres -d my_db_test -f my_db.sql
```


## connections
```sql
SELECT pid, datname, usename, client_addr FROM pg_stat_activity ;
```
