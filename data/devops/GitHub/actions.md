# GitHub Actions


## setup
```txt
mkdir -p .github/workflows/
```


## add a job
`nano .github/workflows/my-actions.yaml`
```yaml
name: my-first-actions
# run on push
on: [push]
jobs:
  my-first-job:
    runs-on: ubuntu-latest
    # runs-on: windows-latest
    # runs-on: macos-latest
    steps:
      # use (community action) to downloads the files to the runner
      - uses: actions/checkout@v2
      # run this command line inside the runner
      - run: ls -al /
```





