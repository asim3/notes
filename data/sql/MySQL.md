## login
```bash
mysql -u root -p
# Enter password: root
# ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)

mysql -u user_03 -h 192.168.122.89 -P 3306 -p

mysql -u user_03 -p -h 192.168.122.89

mysql -u user_02 -p
# Enter password: pass_02
# Welcome to the MySQL monitor.  Commands end with ; or \g.
# Your MySQL connection id is 15
# Server version: 8.0.36 Source distribution

# Copyright (c) 2000, 2024, Oracle and/or its affiliates.


mysql --login-path=/home/ansible/.mysql.cnf
```


## list all database
```sql
SELECT Host, Db, User, Grant_priv FROM mysql.db;

SELECT Host, Db, User, Select_priv, Insert_priv, Update_priv, Delete_priv, Create_priv, Drop_priv FROM mysql.db;

-- OR


SHOW DATABASES;
-- +--------------------+
-- | Database           |
-- +--------------------+
-- | information_schema |
-- | my_db_01           |
-- | my_db_02           |
-- | my_db_03           |
-- | my_db_04           |
-- | mysql              |
-- | performance_schema |
-- | sys                |
-- +--------------------+
-- 8 rows in set (0.00 sec)
```


## list all tables
```sql
USE mysql;
-- Reading table information for completion of table and column names
-- You can turn off this feature to get a quicker startup with -A
-- Database changed


SHOW TABLES;
-- +------------------------------------------------------+
-- | Tables_in_mysql                                      |
-- +------------------------------------------------------+
-- | columns_priv                                         |
-- | component                                            |
-- | db                                                   |
-- | default_roles                                        |
-- | engine_cost                                          |
-- | func                                                 |
-- | general_log                                          |
-- | global_grants                                        |
-- | gtid_executed                                        |
-- | help_category                                        |
-- | help_keyword                                         |
-- | help_relation                                        |
-- | help_topic                                           |
-- | innodb_index_stats                                   |
-- | innodb_table_stats                                   |
-- | password_history                                     |
-- | plugin                                               |
-- | procs_priv                                           |
-- | proxies_priv                                         |
-- | replication_asynchronous_connection_failover         |
-- | replication_asynchronous_connection_failover_managed |
-- | replication_group_configuration_version              |
-- | replication_group_member_actions                     |
-- | role_edges                                           |
-- | server_cost                                          |
-- | servers                                              |
-- | slave_master_info                                    |
-- | slave_relay_log_info                                 |
-- | slave_worker_info                                    |
-- | slow_log                                             |
-- | tables_priv                                          |
-- | time_zone                                            |
-- | time_zone_leap_second                                |
-- | time_zone_name                                       |
-- | time_zone_transition                                 |
-- | time_zone_transition_type                            |
-- | user                                                 |
-- +------------------------------------------------------+
-- 37 rows in set (0.00 sec)
```


## list all users
```sql
SELECT Host, User, Super_priv FROM mysql.user;
-- +-----------+------------------+------------+
-- | Host      | User             | Super_priv |
-- +-----------+------------------+------------+
-- | localhost | asim             | N          |
-- | localhost | asimxx           | N          |
-- | localhost | bob              | N          |
-- | localhost | mysql.infoschema | N          |
-- | localhost | mysql.session    | Y          |
-- | localhost | mysql.sys        | N          |
-- | localhost | root             | Y          |
-- | localhost | user_01          | N          |
-- | localhost | user_02          | N          |
-- | localhost | user_03          | N          |
-- | localhost | user_04          | N          |
-- +-----------+------------------+------------+
-- 11 rows in set (0.00 sec)


-- User Priv
SELECT Host, User, Grant_priv, Show_db_priv, Select_priv, Insert_priv, Update_priv, Delete_priv, Drop_priv, Create_priv FROM mysql.user;

-- Super User Priv
SELECT Host, User, Super_priv, account_locked, Create_user_priv, password_last_changed, password_lifetime FROM mysql.user;
```


## other
```sql
SELECT count(*) FROM mysql.time_zone;
```
