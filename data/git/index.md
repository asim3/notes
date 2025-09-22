# Source Code Management


## windows SSH
windows PowerShell SSH
```powershell
ssh-keygen -t ed25519 -C "win-test@asimt.sa"

cat C:\Users\Asim\.ssh\id_ed25519.pub
# ssh-ed25519 qwertyuiop.qwertyuiop win-test@asimt.sa

git clone git@github.com:asim3/notes.git
```


## Config
```bash
git config user.name "asim3"
git config user.email "asimwebapps@gmail.com"


git config -l

git config --global user.name "ASIM"

# global config
cat ~/.gitconfig
# [user]
# 	name = asim3
# 	email = asimwebapps@gmail.com
```


## commit
```bash
git init
git add .
git commit -m "initial commit"
```


## add remote
```bash
git remote add origin    https://github.com/asim3/notes.git
git remote add my_origin https://github.com/asim3/notes.git

git remote add origin_ssh git@github.com:asim3/notes.git


git remote
git remote -v
```


## push
```bash
git push origin master
git push my_origin master
```


## Status & Logs
```bash
git status

git log
git log --all --oneline --graph
```


## remove cached files
```bash
git rm -r --cached .
git add .
git commit -m ".gitignore fix"
```


## limit depth
```bash
git clone -b main --single-branch --depth 1  git@github.com:asim3/1217.git
```


## credentials
```bash
git config --global credential.helper store --add

git pull
# provide a username and password and those details will then be remembered later. 

# The credentials are stored in a file @ ~/.git-credentials

cat ~/.git-credentials
https://deployer:lboW%24lPA@gitlab.qu.edu.sa
```
