## Triggers
`nano .github/workflows/my-triggers.yaml`
```yaml
name: my-triggers-actions

on:
  push:
    branches:
      - master
      - main
    tags:
      - v\d+\.\d+\.\d+
      - my_tag

  pull_request:
    branches:
      - master
      - main

  release:
    types: 
      - created


jobs:
  my-first-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo ${GITHUB_REF}
        # refs/heads/master
        # refs/tags/v0.0.1

      - run: echo ${GITHUB_REF##*/}
        # master
        # v0.0.1

      - run: |
          GET_TAGS=$(echo $GITHUB_REF | awk -F "/" '{print $2}')
          if [ "$GET_TAGS" = "tags" ]; then
            echo OK: TAG
          elif [ "${GITHUB_REF##*/}" = "master" ]; then
            echo OK: Master
          else
            echo "Error: $GET_TAGS"
            export MY_ENV="you cannot export env. every step has its own env"
          fi
        # OK: Master
        # OK: TAG

      - run: echo ${GITHUB_WORKSPACE}
        # /home/runner/work/test_actions/test_actions
      
      - run: echo ${GITHUB_ACTOR}
        # asim3
      
      - run: echo ${GITHUB_WORKFLOW}
        # my-triggers-actions
      
      - run: echo ${GITHUB_JOB}
        # my-first-job

      - run: echo ${GITHUB_REPOSITORY}
        # asim3/test_actions

      - run: echo ${GITHUB_HEAD_REF}
        # Only set for pull request events. The name of the head branch.

      - run: echo ${GITHUB_BASE_REF}
        # Only set for pull request events. The name of the head branch.

      - run: echo ${RUNNER_WORKSPACE}
        # /home/runner/work/test_actions

      - run: echo ${RUNNER_PERFLOG}
        # /home/runner/perflog

      - run: ls -al /home/runner/perflog
        # -rw-r--r--  1 runner docker  405 May 29 10:17 Runner.perf
        # -rw-r--r--  1 runner docker  390 May 29 10:17 Worker.perf

      - run: ls -al ${GITHUB_WORKSPACE}/
        # drwxr-xr-x 2 runner docker 4096 May 29 10:23 .
        # drwxr-xr-x 3 runner docker 4096 May 29 10:23 ..

      - run: ls -al ${RUNNER_WORKSPACE}/test_actions
        # drwxr-xr-x 2 runner docker 4096 May 29 10:23 .
        # drwxr-xr-x 3 runner docker 4096 May 29 10:23 ..
```


## schedule
`nano .github/workflows/my-schedule.yaml`
```yaml
name: my-schedule-actions

# https://crontab.guru

on:
  schedule:
    - cron:  '0,15,30,45 * * * *'


jobs:
  my-first-job:
    runs-on: ubuntu-latest
    steps:
      - run: echo ${GITHUB_REF}
        # refs/heads/master

      - run: echo ${GITHUB_REF##*/}
        # master
```
