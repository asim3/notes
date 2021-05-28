## secrets
`nano .github/workflows/my-secrets.yaml`
```yaml
name: my-secrets-actions

on: [ push ]

jobs:
  my-env-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo $NAME_1 $name_2 $Name_3
        env:
          NAME_1: asim
          name_2: bader
          Name_3: ${{ secrets.MY_NEW_SECRET }}
      # asim bader ***

      - run: echo Name  ${{ secrets.MY_NEW_SECRET }}
      # Name ***
```

[notes secrets](https://github.com/asim3/notes/settings/secrets)

[test_actions secrets](https://github.com/asim3/test_actions/settings/secrets/actions)
