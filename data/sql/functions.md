## System Information Functions
[docs](https://www.postgresql.org/docs/11/functions-info.html)
```sql
select current_database();
select current_schema();

select current_schemas(false);
-- {public}
select current_schemas(true);
-- {pg_catalog,public}


-- current_role and user are synonyms for current_user.
select current_user;
select current_role;
select user;

-- the user who initiated the current database connection
select session_user;

-- server start time
select pg_postmaster_start_time();

select version();
```



## Privilege Functions
```sql
select has_any_column_privilege(user, table, privilege); 	       -- does user have privilege for any column of table
select has_any_column_privilege(table, privilege); 	               -- does current user have privilege for any column of table
select has_column_privilege(user, table, column, privilege); 	   -- does user have privilege for column
select has_column_privilege(table, column, privilege); 	           -- does current user have privilege for column
select has_database_privilege(user, database, privilege); 	       -- does user have privilege for database
select has_database_privilege(database, privilege); 	           -- does current user have privilege for database
select has_foreign_data_wrapper_privilege(user, fdw, privilege);   -- does user have privilege for foreign-data wrapper
select has_foreign_data_wrapper_privilege(fdw, privilege); 	       -- does current user have privilege for foreign-data wrapper
select has_function_privilege(user, function, privilege); 	       -- does user have privilege for function
select has_function_privilege(function, privilege); 	           -- does current user have privilege for function
select has_language_privilege(user, language, privilege); 	       -- does user have privilege for language
select has_language_privilege(language, privilege); 	           -- does current user have privilege for language
select has_schema_privilege(user, schema, privilege); 	           -- does user have privilege for schema
select has_schema_privilege(schema, privilege); 	               -- does current user have privilege for schema
select has_sequence_privilege(user, sequence, privilege); 	       -- does user have privilege for sequence
select has_sequence_privilege(sequence, privilege); 	           -- does current user have privilege for sequence
select has_server_privilege(user, server, privilege); 	           -- does user have privilege for foreign server
select has_server_privilege(server, privilege); 	               -- does current user have privilege for foreign server
select has_table_privilege(user, table, privilege); 	           -- does user have privilege for table
select has_table_privilege(table, privilege); 	                   -- does current user have privilege for table
select has_tablespace_privilege(user, tablespace, privilege); 	   -- does user have privilege for tablespace
select has_tablespace_privilege(tablespace, privilege); 	       -- does current user have privilege for tablespace
select has_type_privilege(user, type, privilege); 	               -- does user have privilege for type
select has_type_privilege(type, privilege); 	                   -- does current user have privilege for type
select pg_has_role(user, role, privilege); 	                       -- does user have privilege for role
select pg_has_role(role, privilege); 	                           -- does current user have privilege for role
select row_security_active(table); 	                               -- does current user have row level security active for table
```



## Privilege Functions
```sql
select pg_collation_is_visible(collation_oid);    -- is collation visible in search path
select pg_conversion_is_visible(conversion_oid);  -- is conversion visible in search path
select pg_function_is_visible(function_oid);      -- is function visible in search path
select pg_opclass_is_visible(opclass_oid);        -- is operator class visible in search path
select pg_operator_is_visible(operator_oid);      -- is operator visible in search path
select pg_opfamily_is_visible(opclass_oid);       -- is operator family visible in search path
select pg_statistics_obj_is_visible(stat_oid);    -- is statistics object visible in search path
select pg_table_is_visible(table_oid);            -- is table visible in search path
select pg_ts_config_is_visible(config_oid);       -- is text search configuration visible in search path
select pg_ts_dict_is_visible(dict_oid);           -- is text search dictionary visible in search path
select pg_ts_parser_is_visible(parser_oid);       -- is text search parser visible in search path
select pg_ts_template_is_visible(template_oid);   -- is text search template visible in search path
select pg_type_is_visible(type_oid);              -- is type (or domain) visible in search path
```

