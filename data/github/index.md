## Source Code Management



```txt
git init
git add .
git commit -m "initial commit"
git commit -m "شرح مبسط للتعديلات"
```

```txt
git remote add origin https://github.com/asim3/notes.git
git remote add origin_ssh git@github.com:asim3/notes.git
git remote add my_origin https://github.com/asim3/notes.git
git push origin master
git push my_origin master
```


```txt
git remote
git remote -v
```


## Config
```txt
git config --global user.name "ASIM_NAME"
git config --global user.email "asim@office"
git config --list
# edit
git config --local -e
```


## Status & Logs
```txt
git status
git log
git log --all --oneline --graph
```


## remove cached files
```txt
git rm -r --cached .
git add .
git commit -m ".gitignore fix"
```
