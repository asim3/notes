## Triggers
```yaml
name: my-first-actions

on: [ push ]

jobs:
  my-first-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo $(whoami)
```
