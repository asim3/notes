## Source Code Management



```bash
git init
git add .
git commit -m "initial commit"
git commit -m "شرح مبسط للتعديلات"
```

```bash
git remote add origin https://github.com/asim3/notes.git
git remote add origin_ssh git@github.com:asim3/notes.git
git remote add my_origin https://github.com/asim3/notes.git
git push origin master
git push my_origin master
```


```bash
git remote
git remote -v
```


## Config
```bash
git config --global user.name "ASIM_NAME"
git config --global user.email "asim@office"
git config --list
# edit
git config --local -e
```


## Other
```bash
git status
git log
```


## remove cached files
```bash
git rm -r --cached .
git add .
git commit -m ".gitignore fix"
```
