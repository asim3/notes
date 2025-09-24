[Model properties](https://docs.getdbt.com/reference/model-properties)
[Source properties](https://docs.getdbt.com/reference/source-properties)


## schema properties
`nano my_dbt_init_project\models\data_lake\schema.yml`
```yml
version: 2

sources:
  - name: asim_sources_001
    description: "asim_mock_catalog > asim_mock_schema > mock_data_001"
    database: asim_mock_catalog
    schema: asim_mock_schema
    tables:
      - name: mock_data_001
      - name: mock_data_006
  - name: asim_sources_005
    database: asim_mock_catalog
    schema: qassim_orgs_database
    tables:
      - name: my_table

models:
  - name: mock_006_model
    config:
      materialized: view
  - name: mock_007_model
    config:
      materialized: table
```


[config reference](https://docs.getdbt.com/reference/dbt_project.yml)

> The `dbt_project.yml` file is a required file for all dbt projects.
> It contains important information that tells dbt how to operate your project.


## Configuration 
`nano my_dbt_init_project\dbt_project.yml`
```yml
name: 'my_dbt_init_project'
version: '1.0.0'
# This setting configures which "profile" dbt uses for this project.
profile: 'my_dbt_init_project'
model-paths: ["models"]
analysis-paths: ["analyses"]
test-paths: ["tests"]
seed-paths: ["seeds"]
macro-paths: ["macros"]
snapshot-paths: ["snapshots"]
clean-targets:
  # directories to be removed by `dbt clean`
  - "target"
  - "dbt_packages"
```
