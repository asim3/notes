## run on all OS
```yaml
name: my-ci-actions

on: [ push ]

jobs:
  my-first-job:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      # use (community action) to downloads the repo files
      - uses: actions/checkout@v2

      - run: echo $GITHUB_WORKSPACE
```


## matrix
You can use a build matrix if you want your workflow to run tests 
across `multiple` combinations of operating systems, platforms, and languages. 
```yaml
name: my-matrix-actions
on: [ push ]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      # false = ignore errors
      matrix:
        my-name: ["Bader", "Ahmed"]
        my_order: [1, 2, 3]
    steps:
      - run: echo ${{ matrix.my-name }}
      
      - run: echo ${{ matrix.my_order }}

      - run: echo "$MATRIX_CONTEXT"
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
          # {"my-name": "Bader", "my_order": 1 }
          # {"my-name": "Bader", "my_order": 2 }
          # {"my-name": "Bader", "my_order": 3 }
          # {"my-name": "Ahmed", "my_order": 1 }
          # {"my-name": "Ahmed", "my_order": 2 }
          # {"my-name": "Ahmed", "my_order": 3 }

      - run: echo "$STRATEGY_CONTEXT"
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
          # {
          #   "fail-fast": true,
          #   "job-index": 2,
          #   "job-total": 6,
          #   "max-parallel": 6
          # }
```


## context
`nano .github/workflows/my-context.yaml`
```yaml
name: my-context-actions
on: [ push ]
jobs:
  my-env-job:
    runs-on: ubuntu-latest
    env:
      MY_NEW_ENV_2: "Asim 2"
      MY_NEW_ENV_3: "Asim 3"
    steps:
      - run: echo github.actor = ${{ github.actor }}
        # asim3
      - run: echo github.event_name = ${{ github.event_name }}
        # push
      - run: echo head_commit.message = ${{ github.event.head_commit.message }}
        # my commit by asim
      - run: echo repository.default_branch = ${{ github.event.repository.default_branch }}
        # master
      - run: echo repository.full_name = ${{ github.event.repository.full_name }}
        # asim3/test_actions
      - run: echo name = ${{ github.event.repository.name }}
        # test_actions


      - run: MY_NEW_ENV="Asim 1"

      - run: echo "env $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(env) }}
          MY_NEW_ENV_5: "Asim 5"
        # env {
        #   "MY_NEW_ENV_2": "Asim 2",
        #   "MY_NEW_ENV_3": "Asim 3"
        # }

      - run: echo "github.event $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(github.event) }}
        # github.event {
        #   "repository.full_name": {
        #     "created_at": 1622285864,
        #     "default_branch": "master",
        #     "deployments_url": "https://api.github.com/repos/asim3/test_actions/deployments",
        #     "description": null,
        #     "disabled": false,
        #     "fork": false,
        #     "forks": 0,
        #     "forks_count": 0,
        #     "forks_url": "https://api.github.com/repos/asim3/test_actions/forks",
        #     "full_name": "asim3/test_actions",
        #     "git_commits_url": "https://api.github.com/repos/asim3/test_actions/git/commits{/sha}",
        #     "git_refs_url": "https://api.github.com/repos/asim3/test_actions/git/refs{/sha}",
        #     "git_tags_url": "https://api.github.com/repos/asim3/test_actions/git/tags{/sha}",
        #     "git_url": "git://github.com/asim3/test_actions.git",
        #     "has_downloads": true,
        #     "has_issues": true,
        #     "has_pages": false,
        #     "has_projects": true,
        #     "has_wiki": true,
        #     "homepage": null,
        #     "hooks_url": "https://api.github.com/repos/asim3/test_actions/hooks",
        #     "html_url": "https://github.com/asim3/test_actions",
        #     "id": 371949281,
        #     "labels_url": "https://api.github.com/repos/asim3/test_actions/labels{/name}",
        #     "language": "Makefile",
        #     "languages_url": "https://api.github.com/repos/asim3/test_actions/languages",
        #     "license": null,
        #     "master_branch": "master",
        #     "merges_url": "https://api.github.com/repos/asim3/test_actions/merges",
        #     "milestones_url": "https://api.github.com/repos/asim3/test_actions/milestones{/number}",
        #     "mirror_url": null,
        #     "name": "test_actions",
        #     "node_id": "MDEwOlJlcG9zaXRvcnkzNzE5NDkyODE=",
        #     "open_issues": 0,
        #     "open_issues_count": 0,
        #     "owner": {
        #       "avatar_url": "https://avatars.githubusercontent.com/u/48256968?v=4",
        #       "email": "48256968+asim3@users.noreply.github.com",
        #       "events_url": "https://api.github.com/users/asim3/events{/privacy}",
        #       "followers_url": "https://api.github.com/users/asim3/followers",
        #       "following_url": "https://api.github.com/users/asim3/following{/other_user}",
        #       "gists_url": "https://api.github.com/users/asim3/gists{/gist_id}",
        #       "gravatar_id": "",
        #       "html_url": "https://github.com/asim3",
        #       "id": 48256968,
        #       "login": "asim3",
        #       "name": "asim3",
        #       "node_id": "MDQ6VXNlcjQ4MjU2OTY4",
        #       "organizations_url": "https://api.github.com/users/asim3/orgs",
        #       "received_events_url": "https://api.github.com/users/asim3/received_events",
        #       "repos_url": "https://api.github.com/users/asim3/repos",
        #       "site_admin": false,
        #       "starred_url": "https://api.github.com/users/asim3/starred{/owner}{/repo}",
        #       "subscriptions_url": "https://api.github.com/users/asim3/subscriptions",
        #       "type": "User",
        #       "url": "https://api.github.com/users/asim3"
        #     },
        #     "private": false,
        #     "pulls_url": "https://api.github.com/repos/asim3/test_actions/pulls{/number}",
        #     "pushed_at": 1622381408,
        #     "releases_url": "https://api.github.com/repos/asim3/test_actions/releases{/id}",
        #     "size": 34,
        #     "ssh_url": "git@github.com:asim3/test_actions.git",
        #     "svn_url": "https://github.com/asim3/test_actions",
        #     "tags_url": "https://api.github.com/repos/asim3/test_actions/tags",
        #     "teams_url": "https://api.github.com/repos/asim3/test_actions/teams",
        #     "trees_url": "https://api.github.com/repos/asim3/test_actions/git/trees{/sha}",
        #     "updated_at": "2021-05-30T13:28:37Z",
        #     "url": "https://github.com/asim3/test_actions",
        #     "watchers": 0,
        #     "watchers_count": 0
        #   },
        # }


      - run: echo "runner $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(runner) }}
        # runner {
        #   "os": "Linux",
        #   "tool_cache": "/opt/hostedtoolcache",
        #   "temp": "/home/runner/work/_temp",
        #   "workspace": "/home/runner/work/test_actions"
        # }


      - run: echo "needs $AS_JSON"
        env:
          AS_JSON: ${{ toJSON(needs) }}
        # needs {}
```
