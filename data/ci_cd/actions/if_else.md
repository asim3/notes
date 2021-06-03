## run IF ${{ case }}
```yaml
name: my-case-actions

on: [ push ]

jobs:
  case_1:
    runs-on: ubuntu-latest
    if: ${{ contains('Hello world', 'or') }}
    steps:
      - run: echo OK 1

      - run: echo OK 2
        if: ${{ contains('Hello world', 'or') }}

      - run: echo SKIP 3
        if: ${{ contains('Hello world', 'ZZ') }}

      - run: echo OK 4
        if: ${{ github.ref == 'refs/heads/master' }}

      - run: echo OK 5
        if: ${{ contains( github.ref, 'refs/heads') }}

      - run: echo SKIP 6
        if: ${{ contains( github.ref, 'refs/tags') }}
```


## success or failure
`nano .github/workflows/my-after-complete.yaml`
```yaml
name: my-after-complete-actions

on:
  workflow_run:
    workflows: ["my-triggers-actions"]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - run: echo Done
      - run: echo ${GITHUB_REF}
        # refs/heads/master
        # refs/heads/master


  on-failure:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - run: echo Error
        # Error
```