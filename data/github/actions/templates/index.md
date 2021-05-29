## community action
[community actions](https://github.com/actions)
[checkout](https://github.com/actions/checkout/blob/main/action.yml)
```yaml
name: my-first-actions
on: [ push ]
jobs:
  my-first-job:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
            path: my-branch

      - run: echo Done
```
