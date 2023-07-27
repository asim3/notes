## parallel
```yaml
Deploy Staging:
  stage: test
  tags:
    - asim
  script:
    - echo by asim $CI_PIPELINE_IID
    - date
  parallel: 5
```


## loop
```yaml
Deploy Staging:
  stage: test
  tags:
    - asim
  script:
    - echo VAR_1 $VAR_1
    - echo VAR_2 $VAR_2
    - date
  parallel:
    matrix:
      - VAR_1: python
        VAR_2:
          - 8
          - 9
          - v10
      - VAR_1: Node.js
        VAR_2: 
          - v 20.5.0
          - 19
          - Hydrogen
```
