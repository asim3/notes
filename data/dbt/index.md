# Data Build Tool (dbt)


## install dbt
```bash
pip3 install dbt-mysql
# https://pypi.org/project/dbt-mysql/

pip3 install dbt-oracle
# https://pypi.org/project/dbt-oracle/


pip3 install dbt-snowflake
pip3 install dbt-argo
```


## run
```bash
# run all the models in the project
dbt run

# run a specific model
dbt run --select my_dbt_model
```


## test
```bash
# run tests for all the models in the project
dbt test

# run tests for a specific model
dbt test --select my_dbt_model
```


## Deploy & test Models
```bash
# run all the models, tests, snapshots and seeds in the project
dbt build

dbt build --profiles-dir .  --target ci

# execute the snapshots defined in your project
dbt snapshot
```


