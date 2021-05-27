# GitHub Actions


## setup
```bash
mkdir -p /tmp/test_actions/.github/workflows/
cd /tmp/test_actions/
git init
git remote add origin git@github.com:asim3/test_actions.git


cat <<EOF > ./makefile
all: pull add commit push

add:
  echo "\$\$(date): by \$\$(whoami)" >> ./index.html

pull:
  git pull origin master

commit:
  git add .
  git config user.name "asim3 from runner"
  git config user.email "asim3"
  git commit -m "commit by \$\$(whoami)"

push:
  git push origin master
EOF

echo "first commit: test_actions" >> index.html
git add .
git commit -m "first commit"
git push origin master
```


## add a job
`nano .github/workflows/my-actions.yaml`
```yaml
name: my-first-actions

on: [ push ]

jobs:
  my-first-job:
    
    runs-on: ubuntu-latest
    # runs-on: windows-latest
    # runs-on: macos-latest

    steps:
      # use (community action) to downloads the repo files
      - uses: actions/checkout@v2

      - run: ls -al /home/runner/work/
      - run: ls -al /home/runner/work/test_actions/
      - run: ls -al /home/runner/work/test_actions/test_actions/
      - run: |
          uname
          whoami
          echo "Done"


  my-second-job:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - run: pwd # /home/runner/work/test_actions/test_actions
      - run: cd /tmp/
      - run: pwd # /home/runner/work/test_actions/test_actions


  my-third-job:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - run: make all
      

  my-env-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo $MY_NAME
        env:
          MY_NAME: Asim

      - run: echo $NAME_1 $name_2 $Name_3
        env:
          NAME_1: asim
          name_2: bader
          Name_3: Ahmed
```
