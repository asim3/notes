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
      type: databricks
      token: <******>
      threads: 1
      # set the target schema
      schema: data_warehouse_dev
      # schema: default
      # schema: data_lake_v99
```




# postgres setup
```bash
python -m pip install dbt-core dbt-postgres
# dbt-adapters==1.16.7
# dbt-core==1.10.11
# dbt-postgres==1.9.1
```


## add new project
```bash
dbt init
# Enter a name for your project (letters, digits, underscore): my_dbt_init_psql
# Which database would you like to use? [1] postgres
# host (hostname for the instance): 72.60.33.72
# port [5432]:
# user (dev username): asim3
# pass (dev password):
# dbname (default database that dbt will build objects in): dbt_main
# schema (default schema that dbt will build objects in): dbt_schema_by_asim
# threads (1 or more) [1]:


cd my_dbt_init_psql

dbt debug
# All checks passed!
```


## connection
`nano /home/asim/.dbt/profiles.yml`
```yml
my_dbt_init_project:
  outputs:
    dev:
      catalog: my_dbt_init_catalog
      host: dbc-ab959111-0cf9.cloud.databricks.com
      http_path: /sql/1.0/warehouses/094d5e2b76c89d4e
      schema: data_lake_v99
      threads: 1
      token: <******>
      type: databricks
  target: dev
my_dbt_init_psql:
  outputs:
    dev:
      dbname: dbt_main
      host: 72.60.33.72
      pass: <******>
      port: 5432
      schema: dbt_schema_by_asim
      threads: 1
      type: postgres
      user: asim3
  target: dev
```
