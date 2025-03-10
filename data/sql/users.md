## MySql
```sql
-- Show Users
SELECT User, Host FROM mysql.user;

-- User Priv
SELECT Host, User, Grant_priv, Show_db_priv, Select_priv, Insert_priv, Update_priv, Delete_priv, Drop_priv, Create_priv FROM mysql.user;

-- Super User Priv
SELECT Host, User, Super_priv, account_locked, Create_user_priv, password_last_changed, password_lifetime FROM mysql.user;


-- Create User
CREATE USER 'asim'@'localhost' IDENTIFIED BY 'my-password';

-- Grant All Priveleges On All Databases
GRANT ALL PRIVILEGES ON * . * TO 'asim'@'localhost';
FLUSH PRIVILEGES;

-- Show Grants
SHOW GRANTS FOR 'asim'@'localhost';
```


## help
```sql
\h create user


-- Command:     CREATE USER
-- Description: define a new database role
-- Syntax:
-- CREATE USER name [ [ WITH ] option [ ... ] ]

-- where option can be:

--       SUPERUSER | NOSUPERUSER
--     | CREATEDB | NOCREATEDB
--     | CREATEROLE | NOCREATEROLE
--     | INHERIT | NOINHERIT
--     | LOGIN | NOLOGIN
--     | REPLICATION | NOREPLICATION
--     | BYPASSRLS | NOBYPASSRLS
--     | CONNECTION LIMIT connlimit
--     | [ ENCRYPTED ] PASSWORD 'password' | PASSWORD NULL
--     | VALID UNTIL 'timestamp'
--     | IN ROLE role_name [, ...]
--     | IN GROUP role_name [, ...]
--     | ROLE role_name [, ...]
--     | ADMIN role_name [, ...]
--     | USER role_name [, ...]
--     | SYSID uid
```


## add new user
```sql
create user my_user_with_login_access with encrypted password 'my_user_pass';
-- CREATE ROLE


\du
\du+
--                                            List of roles
--          Role name         |                         Attributes                         | Member of 
-- ---------------------------+------------------------------------------------------------+-----------
--  my_user_with_login_access |                                                            | {}
--  postgres                  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```



## user login
```bash
psql --username=my_user_with_login_access
# Password for user my_user_with_login_access: my_user_pass
# psql: FATAL:  database "my_user_with_login_access" does not exist
# 
# No DataBase



psql --username=my_user_with_login_access --dbname=postgres
psql --username=my_user_with_login_access -d       postgres
# Password for user my_user_with_login_access: 
# psql (11.13)
# Type "help" for help.
postgres=> 
```



## add new roles
> user == `Can    login`   
> role == `Cannot login`
```sql
create role my_role_without_login_access;


\du
--                                              List of roles
--           Role name           |                         Attributes                         | Member of 
-- ------------------------------+------------------------------------------------------------+-----------
--  my_role_without_login_access | Cannot login                                               | {}
--  my_user_with_login_access    |                                                            | {}
--  postgres                     | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```
