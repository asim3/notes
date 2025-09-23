## setup a DB
[Database setup](https://www.databricks.com/learn/free-edition)
[Databricks setup](https://docs.getdbt.com/docs/core/connect-data-platform/databricks-setup)


## install dbt
```bash
python -m pip install dbt-core dbt-databricks

dbt --version
# Core:
#   - installed: 1.10.11
#   - latest:    1.10.11 - Up to date!

# Plugins:
#   - databricks: 1.10.12 - Up to date!
#   - spark:      1.9.3   - Up to date!
```


## add new project
```bash
dbt init
# enter a name for your project: my_dbt_init_project
# Which database would you like to use? [1] databricks
# host (yourorg.databricks.com): 123456789.cloud.databricks.com
# http_path (HTTP Path): /sql/1.0/warehouses/123456789
# Desired access token option (enter a number): 1
# token (dapiXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX): ******
# Desired unity catalog option (enter a number): [1] use Unity Catalog
# catalog (initial catalog): my_dbt_init_catalog
# schema (default schema that dbt will build objects in): default
# threads (1 or more) [1]: 1



cd my_dbt_init_project

dbt debug
# All checks passed!
```


## profiles
`type C:\Users\Asim\.dbt\profiles.yml`
```yml
my_dbt_init_project:
  target: dev
  outputs:
    dev:
      catalog: my_dbt_init_catalog
      host: 123456789.cloud.databricks.com
      http_path: /sql/1.0/warehouses/123456789
      schema: default
      threads: 1
      token: <******>
      type: databricks
```




# MySQL setup
[MySQL setup](https://docs.getdbt.com/docs/core/connect-data-platform/mysql-setup)
[Oracle setup](https://docs.getdbt.com/docs/core/connect-data-platform/oracle-setup)


## install the adapter
```bash
python -m pip install dbt-core dbt-mysql

python -m pip install dbt-core dbt-postgres
python -m pip install dbt-core dbt-oracle
```


## connection
`nano /home/asim/.dbt/profiles.yml`
```yml
your_profile_name:
  target: dev
  outputs:
    dev:
      type: mysql
      server: localhost
      port: 3306
      schema: analytics
      username: your_mysql_username
      password: your_mysql_password
      ssl_disabled: True
```

