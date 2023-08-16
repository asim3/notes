## install
```bash
pip install GitPython
```


## git clone
```py
from git import Repo

repo_url = "https://github.com/asim3/notes.git"
repo_dir = "/tmp/new_dir"

repo = Repo.clone_from(repo_url, repo_dir, branch="main")

print(repo.heads)
# [<git.Head "refs/heads/main">]

print(repo.heads.main)
# main

print(repo.heads.main.commit)
# 50a62e1078cb143305c5599d8b171cffcc67273c
```


## git fetch
```py
from git import Repo


repo = Repo("/tmp/xxx")
# git.exc.NoSuchPathError: /tmp/xxx

repo = Repo("/tmp/")
# git.exc.InvalidGitRepositoryError: /tmp

repo = Repo("/tmp/new_dir")
repo.remotes.origin.fetch()
```
