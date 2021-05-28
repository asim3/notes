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

  schedule:
    - cron:  '0,15,30,45 * * * *'
      # https://crontab.guru


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

      - run: echo ${GITHUB_ACTION_REF}
      - run: echo ${GITHUB_HEAD_REF}
      - run: echo ${GITHUB_BASE_REF}

      - run: echo ${RUNNER_WORKSPACE}
        # /home/runner/work/test_actions

      - run: echo ${RUNNER_PERFLOG}
        # /home/runner/perflog
      
      - run: ls -al /home/runner/work/test_actions
      - run: ls -al /home/runner/perflog
```


## after workflow
`nano .github/workflows/my-after-complete.yaml`
```yaml
name: my-after-complete-actions


on:
  workflow_run:
    workflows: ["my-triggers-actions"]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - run: echo Done
      - run: echo ${GITHUB_REF}
        # refs/heads/master
        # refs/heads/master


  on-failure:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - run: echo Error
```
