## CI/CD
```yaml
name: CI-CD

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
      # - run: exit 2


  build_and_push:
    needs: run-tests
    runs-on: ubuntu-latest
    steps:
      - run: echo ${GITHUB_REF##*/}


  deployment:
    needs: build_and_push
    runs-on: ubuntu-latest
    steps:
      - run: echo ${GITHUB_REF##*/}
```
