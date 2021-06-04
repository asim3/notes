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
