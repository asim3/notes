## list
```bash
# list all local branches
git branch

# list all branches
git branch -a
```


## switch between branches
> moves the HEAD pointer
```bash
git checkout deploy
git checkout main

# print current branch
git branch
```


## new branch
```bash
# copy files from the current HEAD pointer
git branch production 

# OR just switch to a new branch
git checkout -b production
```


## print graph
print full graph and locate the HEAD pointer
```bash
git log --all --oneline --graph
```


# merge
## fast-forward merge
`git diff _from_.._to_`
```bash
git diff deploy..main

# Fast-forward from deploy to main
git checkout deploy
git merge main

git log --all --oneline --graph
```
>`git branch --merged` to check if current branch is merged


## push
```bash
# add remote
git remote add production https://github.com/asim3/notes.git

# puch current branch
git push

git push origin production
```


## 3-Way merge
```bash
git status
git diff deploy..main

# Merge branch 'main' into deploy
git merge main

git log --all --oneline --graph
```


## delete branch
> use `git merge --abort` to abort the merge
```bash
# delete branch locally
git branch -d production

# delete branch remotely
git push origin --delete production
```
