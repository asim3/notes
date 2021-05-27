# github
```makefile
all: pull commit push

pull:
  git pull origin master

commit:
  git add .
  git config user.name "asim3 from runner"
  git config user.email "asim3"
  git commit -m "commit by \$\$(whoami)"

push:
  git push origin master
```
