## Triggers
`nano .github/workflows/my-triggers.yaml`
```yaml
name: my-triggers-actions

on:
  push:
    branches:
      - master
    tags:
      - v\d+\.\d+\.\d+

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
          if [ "${GITHUB_REF##*/}" = "master" ]; then
            echo OK
          else
            echo Tag
          fi
      

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
```
