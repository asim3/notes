## list tag
```bash
git tag

git tag -l "v0.0*"

git show v0.01
git show v0.02
```


## most recent tag
```bash
git describe parent

# find the closest tagname without any suffix
git describe --abbrev=0
```


## add tag
```bash
git tag v0.01

# with message
git tag -a v0.01 -m "my version 0.02"

# Make a GPG-signed tag
git tag -s v0.03 -m "my version 0.03"
```


## push tag
```bash
git push origin v0.01 

git push origin --tags

git push --tags
```


## delete tag
```bash
git tag -d v0.01
git tag --delete v0.01

git push origin -d v0.01 
git push origin --delete v0.01 
```


## CHANGELOG.md
```md
# Release Notes


## Version 1.18.1 - 2021-03-04


Features:

* kvm2 driver: Add flag 

Minor Improvements:

* Spanish translations 

Bug Fixes:

* Remove WSLENV empty check from IsMicrosoftWSL 
* Added WaitGroups to prevent stderr/stdout from 

Version changes:

* Restore kube-cross build image 
```


## 
```bash
```


## 
```bash
```


## 
```bash
```


## 
```bash
```


## 
```bash
```

