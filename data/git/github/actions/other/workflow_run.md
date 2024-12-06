```bash
mkdir -p .github/workflows/
touch .github/workflows/test.yaml
touch .github/workflows/docker.yaml
touch .github/workflows/k8s.yaml
```


## Run Tests
```yaml
name: Run Tests

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+


jobs:
  run-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - run: ls -al /home/runner/work/
      
      - run: exit 2
```


## Build & Push
```yaml
name: Docker Build and Push

on:
  workflow_run:
    workflows: ["Run Tests"]
    types: [completed]

jobs:
  build_and_push:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest

    steps:
      - run: echo $MY_ENV
        env:
          MY_ENV: ${{ toJSON(github.event) }}

      - run: echo $MY_Tag
        env:
          MY_ENV: ${{ toJSON(github.event.workflow_run) }}
```


## Deploy to K8s
```yaml
name: Deploy to K8s

on:
  workflow_run:
    workflows: ["Docker Build and Push"]
    types: [completed]

jobs:
  deployment:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest

    steps:
      - run: echo $MY_ENV
        env:
          MY_ENV: ${{ toJSON(github.event) }}

      - run: echo $MY_ENV
        env:
          MY_ENV: ${{ toJSON(github.event.workflow_run) }}
```
