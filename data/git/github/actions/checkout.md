## community action
[community actions](https://github.com/actions)
[checkout](https://github.com/actions/checkout/blob/main/action.yml)
```yaml
name: my-checkout-actions
on: [ push ]
jobs:
  my-first-job:
    runs-on: ubuntu-latest
    steps:
      - run: pwd
        # /home/runner/work/test_actions/test_actions

      - run: ls -al /home/runner/work/test_actions/test_actions
        # drwxr-xr-x 2 runner docker 4096 Jun  5 00:08 .
        # drwxr-xr-x 3 runner docker 4096 Jun  5 00:08 ..

      - uses: actions/checkout@v2
        # use (community action) to downloads the repo files

      - run: ls -al /home/runner/work/test_actions/test_actions
        # drwxr-xr-x 4 runner docker 4096 May 28 13:47 .
        # drwxr-xr-x 3 runner docker 4096 May 28 13:47 ..
        # drwxr-xr-x 8 runner docker 4096 May 28 13:47 .git
        # drwxr-xr-x 3 runner docker 4096 May 28 13:47 .github
        # -rw-r--r-- 1 runner docker   68 May 28 13:47 index.html
        # -rw-r--r-- 1 runner docker  273 May 28 13:47 makefile

      - run: ls -al /home/runner/work/test_actions/
        # drwxr-xr-x 3 runner docker 4096 May 28 13:47 .
        # drwxr-xr-x 6 runner root   4096 May 28 13:47 ..
        # drwxr-xr-x 4 runner docker 4096 May 28 13:47 test_actions

      - run: ls -al /home/runner/work/
        # drwxr-xr-x  6 runner root   4096 May 28 13:47 .
        # drwxrwxrwx 11 runner docker 4096 May 28 13:47 ..
        # drwxr-xr-x  3 runner docker 4096 May 28 13:47 _PipelineMapping
        # drwxr-xr-x  3 runner docker 4096 May 28 13:47 _actions
        # drwxr-xr-x  4 runner docker 4096 May 28 13:47 _temp
        # drwxr-xr-x  3 runner docker 4096 May 28 13:47 test_actions


  copy-different-repository:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
            path: my-branch

      - run: ls -al

      - run: ls -al /home/runner/work/test_actions/
    
    
  setup-python:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.x', '3.6', '3.7', '3.8', '3.9']
    name: Python ${{ matrix.python-version }}
    steps:
      - uses: actions/checkout@v2

      - uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python-version }}
          architecture: 'x64' # [x64 or x86] Defaults to x64
          
      - run: python -V
        # 3.x == 3.9.5
        # 3.6 == 3.6.13
        # 3.7 == 3.7.10
        # 3.8 == 3.8.10
        # 3.9 == 3.9.5


      - run: ls -al
        # drwxr-xr-x  7 runner docker 4096 Jun  4 11:21 .
        # drwxr-xr-x  3 runner docker 4096 Jun  4 11:21 ..
        # drwxr-xr-x  8 runner docker 4096 Jun  4 11:21 .git
        # drwxr-xr-x  3 runner docker 4096 Jun  4 11:21 .github
        # -rw-r--r--  1 runner docker    1 Jun  4 11:21 .nojekyll
        # -rw-r--r--  1 runner docker 1073 Jun  4 11:21 LICENSE
        # -rw-r--r--  1 runner docker  232 Jun  4 11:21 README.md
        # drwxr-xr-x 32 runner docker 4096 Jun  4 11:21 data
        # -rw-r--r--  1 runner docker 1150 Jun  4 11:21 favicon.ico
        # -rw-r--r--  1 runner docker  940 Jun  4 11:21 index.html
        # -rw-r--r--  1 runner docker  274 Jun  4 11:21 makefile
        # drwxr-xr-x  2 runner docker 4096 Jun  4 11:21 scripts
        # drwxr-xr-x  7 runner docker 4096 Jun  4 11:21 static
```
