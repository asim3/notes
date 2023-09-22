```yml
jobs:
  print-all:
    runs-on: ubuntu-latest
    steps:
      - run: echo $GITHUB_ACTOR
        # asim3
      - run: echo $GITHUB_REPOSITORY_OWNER
        # asim3
      - run: echo $GITHUB_EVENT_NAME
        # push
      - run: echo $GITHUB_JOB
        # print-all
      - run: echo $GITHUB_RUN_ATTEMPT
        # 1
      - run: echo $GITHUB_RUN_ID
        # 1234567
      - run: echo $GITHUB_RUN_NUMBER
        # 1
      - run: echo $GITHUB_SHA
        # eecc19defce84ee6bbc9cb482ba7a3d13ee0eecf
      - run: echo $GITHUB_REF
        # refs/heads/main
      - run: echo $GITHUB_REF_NAME
        # main
```


## Default environment variables
[docs](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables)
```yml
name: Default environment variables
on: 
  - push


jobs:
  print-all:
    runs-on: ubuntu-latest
    steps:
      - run: echo $CI
        # true
      - run: echo $GITHUB_ACTION
        # __run_2
      - run: echo $GITHUB_ACTIONS
        # true
      - run: echo $GITHUB_ACTOR
        # asim3
      - run: echo $GITHUB_ACTOR_ID
        # 12345
      - run: echo $GITHUB_API_URL
        # https://api.github.com
      - run: echo $GITHUB_EVENT_NAME
        # push
      - run: echo $GITHUB_JOB
        # print-all
      - run: echo $GITHUB_REF
        # refs/heads/main
      - run: echo $GITHUB_REF_NAME
        # main
      - run: echo $GITHUB_REF_PROTECTED
        # false
      - run: echo $GITHUB_REPOSITORY
        # asim3/notes
      - run: echo $GITHUB_REPOSITORY_ID
        # 12345
      - run: echo $GITHUB_REPOSITORY_OWNER
        # asim3
      - run: echo $GITHUB_RUN_ATTEMPT
        # 1
      - run: echo $GITHUB_RUN_ID
        # 1234567
      - run: echo $GITHUB_RUN_NUMBER
        # 1
      - run: echo $GITHUB_SHA
        # eecc19defce84ee6bbc9cb482ba7a3d13ee0eecf
      - run: echo $GITHUB_WORKFLOW
        # Default environment variables
      - run: echo $RUNNER_NAME
        # GitHub Actions 2
      - run: echo $RUNNER_OS
        # Linux
```
