# Data Build Tool (dbt)
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

pip freeze

dbt --version
# Core:
#   - installed: 1.10.11
#   - latest:    1.10.11 - Up to date!

# Plugins:
#   - databricks: 1.10.12 - Up to date!
#   - spark:      1.9.3   - Up to date!
```


## setup a DB
[Database setup](https://www.databricks.com/learn/free-edition)


## add new project
```bash
dbt init
# enter a name for your project: my_dbt_project
# which database would you like to use?: 1
# host: localhost


dbt debug
# All checks passed!
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


## run
Runs the models you defined in your project
```bash
# run all the models in the project
dbt run

# run a specific model
dbt run --select my_dbt_model
```


## test
Executes the tests you defined for your project
```bash
# run tests for all the models in the project
dbt test

# run tests for a specific model
dbt test --select my_dbt_model
```


## Deploy & test Models
Builds and tests your selected resources such as models, seeds, snapshots, and tests
```bash
# run all the models, tests, snapshots and seeds in the project
dbt build

dbt build --profiles-dir .  --target ci

# execute the snapshots defined in your project
dbt snapshot
```
