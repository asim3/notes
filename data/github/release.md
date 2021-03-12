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


## CHANGELOG.md
`nano CHANGELOG.md`
```md
# Release Notes


## Version 0.2.0 - 2021-03-12

Fixed:

* Fix a typo


## Version 0.1.0 - 2021-03-04

Initial release.

Added:

* Readme
```


### Types of Changes
#### Added:
* For any new features that have been added since the last version was released
#### Changed:
* To note any changes to the software’s existing functionality
#### Deprecated:
* To note any features that were once stable but are no longer and have thus been removed
#### Fixed:
* Any bugs or errors that have been fixed should be so noted
#### Removed:
* This notes any features that have been deleted and removed from the software
#### Security:
* This acts as an invitation to users who want to upgrade and avoid any software vulnerabilities
