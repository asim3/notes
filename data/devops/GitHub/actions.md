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
      - run: ls -al /home/runner/work/
      - run: ls -al /home/runner/work/notes/
      - run: ls -al /home/runner/work/notes/notes/

  execute-bash-script:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: chmod +x /home/runner/work/notes/notes/update.sh
      - run: /home/runner/work/notes/notes/update.sh
```


## Environment
[List Env](https://github.com/asim3/notes/settings/secrets)
```yaml
name: my-env-actions
on: [push]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    steps:
      - name: print Hello world
        run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
        env:
        FIRST_NAME: Mona
        middle_name: The
        Last_Name: Octocat
        
      - name: print env from GitHub
        run: echo added from GitHub $MY_NEW_SECRET
```
