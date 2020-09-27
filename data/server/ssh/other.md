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



Troubleshooting
> make sure to restart sshd    
`sudo systemctl restart sshd`
```txt
cat /etc/ssh/sshd_config
# ...
PubkeyAuthentication yes
PermitRootLogin [no|yes|prohibit-password|without-password]
PasswordAuthentication yes 
# ...


# disable password and root login
sudo nano /etc/ssh/sshd_config 
# ...
PermitRootLogin no
PasswordAuthentication no 
# ...
```
