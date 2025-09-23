## setup a DB
[Database setup](https://www.databricks.com/learn/free-edition)

## dbt docs
[install](https://docs.getdbt.com/docs/core/pip-install)
[Databricks setup](https://docs.getdbt.com/docs/core/connect-data-platform/databricks-setup)
[MySQL setup](https://docs.getdbt.com/docs/core/connect-data-platform/mysql-setup)
[Oracle setup](https://docs.getdbt.com/docs/core/connect-data-platform/oracle-setup)


## install dbt
```bash
python -m pip install dbt-core dbt-databricks
python -m pip install dbt-core dbt-postgres
python -m pip install dbt-core dbt-mysql
python -m pip install dbt-core dbt-oracle


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
  outputs:
    dev:
      catalog: my_dbt_init_catalog
      host: 123456789.cloud.databricks.com
      http_path: /sql/1.0/warehouses/123456789
      schema: default
      threads: 1
      token: <******>
      type: databricks
  target: dev
```


## Configuration
`nano my_dbt_init_project\dbt_project.yml`
```yml

# Name your project! Project names should contain only lowercase characters
# and underscores. A good package name should reflect your organization's
# name or the intended use of these models
name: 'my_dbt_init_project'
version: '1.0.0'

# This setting configures which "profile" dbt uses for this project.
profile: 'my_dbt_init_project'

# These configurations specify where dbt should look for different types of files.
# The `model-paths` config, for example, states that models in this project can be
# found in the "models/" directory. You probably won't need to change these!
model-paths: ["models"]
analysis-paths: ["analyses"]
test-paths: ["tests"]
seed-paths: ["seeds"]
macro-paths: ["macros"]
snapshot-paths: ["snapshots"]

clean-targets:         # directories to be removed by `dbt clean`
  - "target"
  - "dbt_packages"


# Configuring models
# Full documentation: https://docs.getdbt.com/docs/configuring-models

# In this example config, we tell dbt to build all models in the example/
# directory as views. These settings can be overridden in the individual model
# files using the `{{ config(...) }}` macro.
models:
  my_dbt_init_project:
    # Config indicated by + and applies to all files under models/example/
    example:
      +materialized: view
```


















































## MySQL connection
`nano /home/asim/.dbt/profiles.yml`
```yml
my_dbt_project:
  outputs:
    dev:
      type: mysql
      host: localhost
      schema: default
      username: asim
      password: "******"
      http_path: /sql/1.0/warehouses/123456
      threads: 1
  target: dev
```

