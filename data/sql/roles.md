## add role
```sql
CREATE ROLE my_role_0 VALID UNTIL '2030-01-01';

CREATE ROLE my_role_1;

-- single quotes (')
CREATE ROLE my_role_2           LOGIN PASSWORD 'pass';

-- can override all access restrictions within the database
CREATE ROLE my_role_3 SUPERUSER LOGIN PASSWORD 'pass';

-- database creation privilege
CREATE ROLE my_role_4 CREATEDB  LOGIN PASSWORD 'pass' VALID UNTIL '2030-01-01';

CREATE ROLE my_role_5           LOGIN PASSWORD 'pass' CONNECTION LIMIT 100;
```


## list
```sql
SELECT rolname FROM pg_roles;
--           rolname          
-- ---------------------------
--  pg_monitor
--  pg_read_all_settings
--  pg_read_all_stats
--  pg_stat_scan_tables
--  pg_read_server_files
--  pg_write_server_files
--  pg_execute_server_program
--  pg_signal_backend
--  postgres
--  my_user
--  my_role_0
--  my_role_1
--  my_role_2
--  my_role_3
--  my_role_4
--  my_role_5


\du
--                                    List of roles
--  Role name |                         Attributes                         | Member of 
-- -----------+------------------------------------------------------------+-----------
--  my_role_0 | Cannot login                                              +| {}
--            | Password valid until 2030-01-01 00:00:00+00                | 
--  my_role_1 | Cannot login                                               | {}
--  my_role_2 |                                                            | {}
--  my_role_3 | Superuser                                                  | {}
--  my_role_4 | Create DB                                                 +| {}
--            | Password valid until 2030-01-01 00:00:00+00                | 
--  my_role_5 | 100 connections                                            | {}
--  my_user   |                                                            | {}
--  postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```


## login
```bash
psql -U my_role_1 -W postgres
# Password: 
# psql: FATAL:  password authentication failed for user "my_role_1"


psql -U my_role_2 -W postgres
# Password: 
# psql (11.13)
# Type "help" for help.

postgres=> 
```
