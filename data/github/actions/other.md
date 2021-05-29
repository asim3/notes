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
