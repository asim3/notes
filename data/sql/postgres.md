## List of Users
```sql
\du
/*                             List of roles
 Role name |                         Attributes
-----------+------------------------------------------------------------
 asim3     | Create role, Create DB
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS
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
