## add new database
```sql
create database my_db_1 ;
create database my_db_2 ;

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



## grant
```sql
create user my_user with encrypted password 'my_user_pass';

\du
--                                    List of roles
--  Role name |                         Attributes                         | Member of 
-- -----------+------------------------------------------------------------+-----------
--  my_user   |                                                            | {}
--  postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}



grant all privileges on database my_db_1 to my_user;

\l
--                                   List of databases
--    Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-- -----------+----------+----------+-------------+-------------+-----------------------
--  my_db_1   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =Tc/postgres         +
--            |          |          |             |             | postgres=CTc/postgres+
--            |          |          |             |             | my_user=CTc/postgres
--  my_db_2   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
--  postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
```



## login
```t
psql -U my_user -d my_db_1


# connect to othre db
\c my_db_2


my_db_1=> \c my_db_2
# You are now connected to database "my_db_2" as user "my_user".
my_db_2=> 
```



## schema
> when a new `db` is created, new default `public schema` will be added
```sql
show search_path;
--    search_path   
-- -----------------
--  "$user", public
-- (1 row)


select * from public.my_table;
```
