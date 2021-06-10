## install Mercurial
```bash
sudo apt-get install mercurial
```


## detached HEAD
```shell
git log

# detached to old commit
git checkout 96f5b29

git log --all --oneline --graph

# go back to safety
git checkout main
```


## stash
change branch without committing changes
```shell
git status
# modified: ...

git checkout main
# error: ...
```

## save stash
```shell
git stash
git stash save "update readme.md"

git stash list
git stash list -p
```

## load stash
```shell
git stash apply
# or
git stash apply stash@{1}
# or
git stash pop
```
