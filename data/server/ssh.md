Install SSH
```bash
sudo apt install openssh-server
mkdir ~/.ssh/
touch ~/.ssh/authorized_keys
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/authorized_keys


# systemd
sudo systemctl status ssh
# Enable SSH
sudo systemctl enable ssh
```


list all authorized keys in the server
```bash
cat ~/.ssh/authorized_keys 
```



generate key
```bash
ssh-keygen -t rsa -b 4096 -C "myname@example.com"
sudo chmod 700 ~/.ssh/
sudo chmod 600 ~/.ssh/*
```




Copy public key to remote server
```  bash
ssh-copy-id asim@10.68.15.202

# OR 

scp ~/.ssh/id_rsa.pub username@remote.server.ip:~/.ssh/authorized_keys
```
> logout SSH `exit`




Copy files using SSH
```bash
scp ~/local.txt username@remote.server.ip:~/remote/q
 
# Recursively copy entire directories
scp -r /my_var/ username@192.168.100.166:/var/
scp -r username@192.168.100.166:/var/ /my_var/
```


# !!!
```
# Start the ssh-agent in the background
eval "$(ssh-agent -s)"
ssh-add ./.ssh/id_rsa
```



Troubleshooting
```bash
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
> make sure to restart sshd `sudo systemctl restart sshd`



testing SSH connection
```bash
ssh -T git@github.com

# if ERROR: 
#   ssh: connect to host github.com port 22: Connection timed out
sudo nano ~/.ssh/config
# add to ~/.ssh/config
Host github.com
 Hostname ssh.github.com
 Port 443
```
