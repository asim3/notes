## sources
`nano my_dbt_init_project\models\sources.yml`
```yml
version: 2
sources:
  - name: asim_mock_schema
    description: "asim_mock_catalog.asim_mock_schema.mock_data_001"
    database: asim_mock_catalog
    schema: asim_mock_schema
    # loader: <string>
    tables:
      - name: mock_data_001
      - name: mock_data_006
```


## mock_001_model
`nano my_dbt_init_project\models\data_lake\mock_001_model.sql`
```sql
{{ config(materialized='table') }}

select *
from {{ source('asim_mock_schema', 'mock_data_001') }}
```


## mock_006_model
`nano my_dbt_init_project\models\data_lake\mock_006_model.sql`
```sql
select *
from {{ source('asim_mock_schema', 'mock_data_006') }}
```


## mock_007_model
`nano my_dbt_init_project\models\data_lake\mock_007_model.sql`
```sql
select *
from {{ ref('mock_006_model') }}
where id = 33
```


## Property file
`nano my_dbt_init_project\models\data_lake\data_properties.yml`
```yml
version: 2
models:
  - name: mock_006_model
    config:
      materialized: view
  - name: mock_007_model
    config:
      materialized: table
```


## Configuration 
`nano my_dbt_init_project\dbt_project.yml`
```yml
# ...

models:
  my_dbt_init_project:
    data_lake:
      +materialized: view
```


## run
Runs the models you defined in your project
```bash
dbt run

# 21:50:23  7 of 10 START sql table model default.mock_001_model ........................... [RUN]
# 21:50:26  7 of 10 OK created sql table model default.mock_001_model ...................... [OK in 2.68s]
# 21:50:26  8 of 10 START sql view model default.mock_006_model ............................ [RUN]
# 21:50:28  8 of 10 OK created sql view model default.mock_006_model ....................... [OK in 1.67s]
# 21:50:29  10 of 10 START sql table model default.mock_007_model .......................... [RUN]
# 21:50:32  10 of 10 OK created sql table model default.mock_007_model ..................... [OK in 3.03s]
```
