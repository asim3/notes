[tutorial](https://www.postgresqltutorial.com/postgresql-administration/postgresql-grant/)




## all privileges
```sql
grant all privileges on database my_db_3 to my_user_3;
GRANT ALL PRIVILEGES ON DATABASE my_db_4 TO my_user_4;
```


## login
```t
psql --username=my_user_3 --dbname=my_db_3
psql --username=my_user_3 -d       my_db_3


create database my_db_6;
# ERROR:  permission denied to create database


\c my_db_5
# You are now connected to database "my_db_5" as user "my_user_3".
```


## connect db
```sql
GRANT CONNECT ON DATABASE my_db_5 TO my_user_5;
```


## usage schema
```sql
GRANT USAGE ON SCHEMA schema_name TO my_user_5;
```


## select
```sql
GRANT SELECT ON table_name TO my_user_5;
```


## select all
Grant SELECT for multiple tables
```sql
GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO my_user_5;
```


## future select
If you want to grant access to the new table in the future automatically, you have to alter default:
```sql
ALTER DEFAULT PRIVILEGES IN SCHEMA schema_name

GRANT SELECT ON TABLES TO my_user_5;
```
