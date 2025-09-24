[docs](https://docs.getdbt.com/docs/build/data-tests)
[reference](https://docs.getdbt.com/reference/resource-properties/data-tests)


## schema properties
`nano my_dbt_init_project\models\data_lake\schema.yml`
```yml
version: 2

sources:
  # ...

models:
  - name: mock_006_model
    config:
      materialized: view
    columns:
      - name: id
        data_tests:
          - unique
          - not_null
  - name: mock_007_model
    config:
      materialized: table
    columns:
      - name: order_id
        data_tests:
          - not_null
          - unique:
              config:
                where: "order_id > 21"
          - accepted_values:
              arguments:
                values: ['placed', 'shipped', 'completed', 'returned']
          - accepted_values:
              arguments:
                values: [1, 2, 3, 4]
                quote: false
          - relationships:
              arguments:
                to: ref('customers')
                field: id
          - dbt_utils.expression_is_true:
              arguments:
                expression: "order_total = subtotal + tax_paid"
```
