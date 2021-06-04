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
      # use (community action) to downloads the repo files
      - uses: actions/checkout@v2

      - run: ls -al /home/runner/work/
        # drwxr-xr-x  6 runner root   4096 May 28 13:47 .
        # drwxrwxrwx 11 runner docker 4096 May 28 13:47 ..
        # drwxr-xr-x  3 runner docker 4096 May 28 13:47 _PipelineMapping
        # drwxr-xr-x  3 runner docker 4096 May 28 13:47 _actions
        # drwxr-xr-x  4 runner docker 4096 May 28 13:47 _temp
        # drwxr-xr-x  3 runner docker 4096 May 28 13:47 test_actions

      - run: ls -al /home/runner/work/test_actions/
        # drwxr-xr-x 3 runner docker 4096 May 28 13:47 .
        # drwxr-xr-x 6 runner root   4096 May 28 13:47 ..
        # drwxr-xr-x 4 runner docker 4096 May 28 13:47 test_actions

      - run: ls -al /home/runner/work/test_actions/test_actions/
        # drwxr-xr-x 4 runner docker 4096 May 28 13:47 .
        # drwxr-xr-x 3 runner docker 4096 May 28 13:47 ..
        # drwxr-xr-x 8 runner docker 4096 May 28 13:47 .git
        # drwxr-xr-x 3 runner docker 4096 May 28 13:47 .github
        # -rw-r--r-- 1 runner docker   68 May 28 13:47 index.html
        # -rw-r--r-- 1 runner docker  273 May 28 13:47 makefile
      
      - run: |
          uname
          whoami
          echo "Done"
        # Linux
        # runner
        # Done


  my-second-job:
    runs-on: ubuntu-latest
    needs: my-first-job
    
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
        # Asim

      - run: echo $NAME_1 $name_2 $Name_3
        env:
          NAME_1: asim
          name_2: bader
          Name_3: Ahmed
        # asim bader Ahmed
```
