## Triggers
`nano .github/workflows/my-triggers.yaml`
```yaml
name: my-triggers-actions

on: [ push ]

jobs:
  my-first-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo $(whoami)
```
