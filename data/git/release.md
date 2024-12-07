## list tag
```bash
git tag

git tag -l "v0.*"

git show v0.1.0
git show v0.2.0
```


## most recent tag
```bash
git describe parent

# find the closest tagname without any suffix
git describe --abbrev=0
```


## add tag
```bash
git tag v0.1.0

# with message
git tag -a v0.1.0 -m "my version 0.1.0"

# Make a GPG-signed tag
git tag -s v0.3.0 -m "my version 0.3.0"
```


## push tag
```bash
git push origin v0.1.0 

git push origin --tags

git push --tags
```


## delete tag
```bash
git tag -d v0.1.0
git tag --delete v0.1.0

git push origin -d v0.1.0 
git push origin --delete v0.1.0 
```
