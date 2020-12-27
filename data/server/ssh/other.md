## testing
testing SSH connection
```txt
ssh -T git@github.com
```

## ssh config
change SSH port number 
`sudo nano ~/.ssh/config`
```txt
Host github.com
    Hostname ssh.github.com
    Port 443
```




## !!!
```txt
# Start the ssh-agent in the background
eval "$(ssh-agent -s)"
ssh-add ./.ssh/id_rsa
```
