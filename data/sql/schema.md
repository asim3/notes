> PostgreSQL automatically creates a `public schema` for every new database. 
> A database can contain `one or multiple` schemas and each schema belongs to 
> only one database. Two schemas can have different objects that share the same name.
```sql
create database my_db ;


\l
--                                   List of databases
--    Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-- -----------+----------+----------+-------------+-------------+-----------------------
--  my_db     | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 



\dn
--   List of schemas
--   Name  |  Owner   
-- --------+----------
--  public | postgres



CREATE TABLE my_public_table (Name varchar(255), Age int);
-- OR
CREATE TABLE public.my_table (Name varchar(255), Age int);



\dt
--               List of relations
--  Schema |      Name       | Type  |  Owner   
-- --------+-----------------+-------+----------
--  public | my_public_table | table | postgres
--  public | my_table        | table | postgres
```


> every user has the `CREATE` and `USAGE` on the public schema



## add new
```sql
CREATE SCHEMA my_schema;
-- CREATE SCHEMA
CREATE SCHEMA sales;
-- CREATE SCHEMA


\dn
--    List of schemas
--    Name    |  Owner   
-- -----------+----------
--  my_schema | postgres
--  public    | postgres
--  sales     | postgres


SELECT current_schema();
--  current_schema 
-- ----------------
--  public



CREATE TABLE my_schema.my_table (Name varchar(255), Age int);
-- ERROR:  permission denied for schema my_schema
-- LINE 1: CREATE TABLE my_schema.my_table (Name varchar(255), Age int)...

CREATE TABLE public.my_table_2 (Name varchar(255), Age int);
-- CREATE TABLE
```



## settings
```sql
SHOW search_path;
--    search_path   
-- -----------------
--  "$user", public


SELECT current_schema();
-- public

SET search_path TO sales, public;
-- SET

SELECT current_schema();
-- sales
```
