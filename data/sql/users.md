## add new user
```sql
create user my_user_with_login_access with password 'my_user_pass';
-- CREATE ROLE


\du
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
```



## add new roles
> `\du`
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
