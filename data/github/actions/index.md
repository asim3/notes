# GitHub Actions
[marketplace](https://github.com/marketplace?type=actions)


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
    if [ -n "\${GITHUB_ACTOR}" ]; then \
      git config user.name github-actions; \
      git config user.email github-actions@github.com; \
    fi
    git add .
    git commit -m "commit by \$\$(whoami) @ \$\$(date +%R)"

push:
    git push origin master
EOF

# replace spaces with taps
sed -i -e 's/    /\t/' ./makefile

echo "first commit: test_actions" >> index.html

make commit
make push
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
      - run: |
          uname
          whoami
          echo "Done"
        # Linux
        # runner
        # Done


  my-second-job:
    needs: my-first-job
    runs-on: ubuntu-latest
    steps:
      - run: pwd # /home/runner/work/test_actions/test_actions
      - run: ls -al /home/runner/work/test_actions/test_actions/
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
        # Asim

      - run: echo $NAME_1 $name_2 $Name_3
        env:
          NAME_1: asim
          name_2: bader
          Name_3: Ahmed
        # asim bader Ahmed
```


## PWD
```yaml
name: My jobs

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+


jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - run: ls -al $(pwd)
        # drwxr-xr-x 2 runner docker 4096 Jun  4 16:27 .
        # drwxr-xr-x 3 runner docker 4096 Jun  4 16:27 ..
      - uses: actions/checkout@v2
      # - run: exit 2
      - run: ls -al $(pwd)
        # drwxr-xr-x 4 runner docker 4096 Jun  4 16:27 .
        # drwxr-xr-x 3 runner docker 4096 Jun  4 16:27 ..
        # drwxr-xr-x 8 runner docker 4096 Jun  4 16:27 .git
        # drwxr-xr-x 3 runner docker 4096 Jun  4 16:27 .github
        # -rw-r--r-- 1 runner docker    7 Jun  4 16:27 .gitignore
        # -rw-r--r-- 1 runner docker  437 Jun  4 16:27 index.html
        # -rw-r--r-- 1 runner docker  355 Jun  4 16:27 makefile

  job2:
    needs: job1
    runs-on: ubuntu-latest
    steps:
      - run: echo ${GITHUB_REF##*/}
      - run: ls -al $(pwd)
        # drwxr-xr-x 2 runner docker 4096 Jun  4 16:27 .
        # drwxr-xr-x 3 runner docker 4096 Jun  4 16:27 ..


  job3:
    needs: job2
    runs-on: ubuntu-latest
    steps:
      - run: echo ${GITHUB_REF##*/}
      - run: ls -al $(pwd)
        # drwxr-xr-x 2 runner docker 4096 Jun  4 16:27 .
        # drwxr-xr-x 3 runner docker 4096 Jun  4 16:27 ..
```
