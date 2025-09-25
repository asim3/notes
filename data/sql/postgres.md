## List of Users
```sql
\du
/*                             List of roles
 Role name |                         Attributes
-----------+------------------------------------------------------------
 asim3     | Create role, Create DB
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS
```


## List of databases
```sql
\l
/*                                                      List of databases
      Name      |  Owner   | Encoding | Locale Provider | Collate |  Ctype  | ICU Locale | ICU Rules |   Access privileges
----------------+----------+----------+-----------------+---------+---------+------------+-----------+-----------------------
 asim3_database | asim3    | UTF8     | libc            | C.UTF-8 | C.UTF-8 |            |           |
 dbt_main       | asim3    | UTF8     | libc            | C.UTF-8 | C.UTF-8 |            |           |
 postgres       | postgres | UTF8     | libc            | C.UTF-8 | C.UTF-8 |            |           |
 template0      | postgres | UTF8     | libc            | C.UTF-8 | C.UTF-8 |            |           | =c/postgres          +
                |          |          |                 |         |         |            |           | postgres=CTc/postgres
 template1      | postgres | UTF8     | libc            | C.UTF-8 | C.UTF-8 |            |           | =c/postgres          +
                |          |          |                 |         |         |            |           | postgres=CTc/postgres
```


## connected to database
```sql
\c dbt_main
/* You are now connected to database "dbt_main" as user "postgres".
```


## List of schemas
```sql
\dn
/*            List of schemas
        Name        |       Owner
--------------------+-------------------
 dbt_schema_by_asim | asim3
 public             | pg_database_owner
```


## List of tables
```sql
\dt dbt_schema_by_asim.*
/*                    List of relations
       Schema       |        Name        | Type  | Owner
--------------------+--------------------+-------+-------
 dbt_schema_by_asim | my_first_dbt_model | table | asim3
```


## List of view
```sql
\dv dbt_schema_by_asim.*
/*                    List of relations
       Schema       |        Name         | Type | Owner
--------------------+---------------------+------+-------
 dbt_schema_by_asim | my_second_dbt_model | view | asim3
```
