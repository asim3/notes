## add users
```sql
create USER my_user_3 with encrypted password 'pass';
create user my_user_4 with encrypted password 'pass';
create user my_user_5 with encrypted password 'pass';


create database my_db_3;
create database my_db_4;
create database my_db_5;
```


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
