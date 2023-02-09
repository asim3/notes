## Source Code Management
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


## Config
```bash
git config --global user.name "ASIM_NAME"
git config --global user.email "asim@office"

git config --list

# edit
git config --local -e
git config --global -e
# [user]
#         email = asim@office.com
#         name = Asim
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


## SSH port number 
`sudo nano ~/.ssh/config`
```bash
Host github.com
    Hostname ssh.github.com
    Port 443
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
