[tutorial](https://www.postgresqltutorial.com/postgresql-administration/postgresql-grant/)


## Schemas and Privileges
By default, users cannot access any objects in schemas they do not own. To 
allow that, the owner of the schema must grant the USAGE privilege on the 
schema. To allow users to make use of the objects in the schema, additional 
privileges might need to be granted, as appropriate for the object.

A user can also be allowed to create objects in someone else's schema. To 
allow that, the CREATE privilege on the schema needs to be granted. Note that
by default, everyone has CREATE and USAGE privileges on the schema public. 
This allows all users that are able to connect to a given database to create 
objects in its public schema. Some usage patterns call for revoking that 
privilege:

- `REVOKE CREATE ON SCHEMA public FROM PUBLIC;`

(The first “public” is the schema, the second “public” means “every user”. 
In the first sense it is an identifier, in the second sense it is a key word, 
hence the different capitalization; recall the guidelines from Section 4.1.1.)


## add db & users
```sql
create database my_db_1;
create database my_db_2;
create database my_db_3;


\c my_db_1

CREATE TABLE MyPublicTable (Name varchar(255), Age int);


create schema my_db_1_schema_1;
create schema my_db_1_schema_2;
create schema my_db_1_schema_3;


create user my_user_1 with encrypted password 'pass';
create user my_user_2 with encrypted password 'pass';
create user my_user_3 with encrypted password 'pass';
```
> After creating a role with the LOGIN attribute, the role can log in to the 
> PostgreSQL database server. However, it cannot do anything to the database
> objects like tables, views, functions, etc.



## login to public schema
```bash
psql my_db_1 -U my_user_1
# done. OK


\l
#                                   List of databases
#    Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
# -----------+----------+----------+-------------+-------------+-----------------------
#  my_db_1   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
#  my_db_2   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 
#  my_db_3   | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | 



CREATE TABLE MyTable (Name varchar(255), Age int);
# CREATE TABLE


\dt
#           List of relations
#  Schema |  Name   | Type  |   Owner   
# --------+---------+-------+-----------
#  public | mytable | table | my_user_1


\c my_db_2
# You are now connected to database "my_db_2" as user "my_user_1".


\dt
# Did not find any relations.
```



## privileges
`psql my_db_1 -U my_user_1`
```sql
GRANT USAGE ON SCHEMA my_db_1_schema_1 TO my_user_1;

REVOKE CREATE ON SCHEMA public FROM PUBLIC;



GRANT ALL                                      ON SCHEMA my_db_1_schema_1 TO my_user_1;
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON SCHEMA my_db_1_schema_1 TO my_user_1;
```
> By default, users cannot access any objects in schemas they do not own.



```txt
SELECT   
    Allows SELECT from any column of the specified table, view, or sequence. 
    Also allows the use of COPY TO. This privilege is also needed to reference 
    existing column values in UPDATE or DELETE. For sequences, this privilege 
    also allows the use of the currval function.
    
    
INSERT
    Allows INSERT of a new row into the specified table. Also allows COPY FROM.
    
    
UPDATE
    Allows UPDATE of any column of the specified table. (In practice, any 
    nontrivial UPDATE command will require SELECT privilege as well, since it must
    reference table columns to determine which rows to update, and/or to compute 
    new values for columns.) SELECT ... FOR UPDATE also requires this privilege, 
    in addition to the SELECT privilege. For sequences, this privilege allows the 
    use of the nextval and setval functions.
    
    
DELETE
    Allows DELETE of a row from the specified table. (In practice, any nontrivial 
    DELETE command will require SELECT privilege as well, since it must reference 
    table columns to determine which rows to delete.)
    
    
RULE
    Allows the creation of a rule on the table/view. (See the CREATE RULE statement.)
    
    
REFERENCES
    To create a foreign key constraint, it is necessary to have this privilege on 
    both the referencing and referenced tables.
    
    
TRIGGER
    Allows the creation of a trigger on the specified table. (See the CREATE TRIGGER statement.)
    
    
CREATE
    For databases, allows new schemas to be created within the database.
    For schemas, allows new objects to be created within the schema. To rename an 
    existing object, you must own the object and have this privilege for the containing schema.
    For tablespaces, allows tables and indexes to be created within the tablespace, 
    and allows databases to be created that have the tablespace as their default 
    tablespace. (Note that revoking this privilege will not alter the placement of 
    existing objects.)
    
    
TEMPORARY
TEMP
    Allows temporary tables to be created while using the specified database.
    
    
EXECUTE
    Allows the use of the specified function and the use of any operators that are 
    implemented on top of the function. This is the only type of privilege that is 
    applicable to functions. (This syntax works for aggregate functions, as well.)
    
    
USAGE
    For procedural languages, allows the use of the specified language for the 
    creation of functions in that language. This is the only type of privilege 
    that is applicable to procedural languages.
    For schemas, allows access to objects contained in the specified schema 
    (assuming that the objects' own privilege requirements are also met). Essentially 
    this allows the grantee to "look up" objects within the schema.
    
    
ALL PRIVILEGES
    Grant all of the available privileges at once. The PRIVILEGES key word is 
    optional in PostgreSQL, though it is required by strict SQL.
```
