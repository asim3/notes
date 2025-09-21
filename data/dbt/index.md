# Data Build Tool (dbt)


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


## build
```bash
# run all the models, tests, snapshots and seeds in the project
dbt build

# execute the snapshots defined in your project
dbt snapshot
```
