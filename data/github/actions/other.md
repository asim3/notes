## run on all OS
```yaml
name: my-ci-actions

on: [ push ]

jobs:
  my-first-job:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      # use (community action) to downloads the repo files
      - uses: actions/checkout@v2

      - run: echo $GITHUB_WORKSPACE
```


## matrix
You can use a build matrix if you want your workflow to run tests 
across `multiple` combinations of operating systems, platforms, and languages. 
```yaml
name: my-matrix-actions
on: [ push ]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      # false = ignore errors
      matrix:
        my-name: ["Bader", "Ahmed"]
        my_order: [1, 2, 3]
    steps:
      - run: echo ${{ matrix.my-name }}
      
      - run: echo ${{ matrix.my_order }}

      - run: echo "$MATRIX_CONTEXT"
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
          # {"my-name": "Bader", "my_order": 1 }
          # {"my-name": "Bader", "my_order": 2 }
          # {"my-name": "Bader", "my_order": 3 }
          # {"my-name": "Ahmed", "my_order": 1 }
          # {"my-name": "Ahmed", "my_order": 2 }
          # {"my-name": "Ahmed", "my_order": 3 }

      - run: echo "$STRATEGY_CONTEXT"
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
          # {
          #   "fail-fast": true,
          #   "job-index": 2,
          #   "job-total": 6,
          #   "max-parallel": 6
          # }
```


## context
`nano .github/workflows/my-context.yaml`
```yaml
name: my-context-actions
on: [ push ]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo github.actor = ${{ github.actor }}
      - run: echo github.event_name = ${{ github.event_name }}
      - run: echo event.run_id = ${{ event.run_id }}


      - run: MY_NEW_ENV="Asim"

      - run: echo "env $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(env) }}


      - run: echo "github.event $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(github.event) }}


      - run: echo "runner $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(runner) }}


      - run: echo "needs $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(needs) }}


      - run: echo env.MY_NEW_ENV ${{ env.MY_NEW_ENV }}
```
