### how to save your new tables


## Property file
`nano my_dbt_init_project\models\data_lake\data_properties.yml`
```yml
version: 2

models:
  - name: mock_001_model
    config:
      materialized: view

  - name: mock_006_model
    config:
      materialized: view

  - name: mock_007_model
    config:
      materialized: view

  - name: qassim_orgs_model
    config:
      materialized: view
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
