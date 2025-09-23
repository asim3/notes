# Data Build Tool (dbt)


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
