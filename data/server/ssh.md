Install SSH
```bash
sudo apt install openssh-server
mkdir ~/.ssh/
touch ~/.ssh/authorized_keys
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/*


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
cd ~/.ssh/
ssh-keygen -t rsa -b 4096 -C "myname@example.com"
```
> if you want to change the key name make sure to put the full directory path



Copy public key to remote server
> make sure you add it to .ssh/authorized_keys file
```  bash
ssh-copy-id asim@10.68.15.202

# OR

ssh asim@192.168.100.188 "echo $(cat .ssh/id_rsa.pub) >> ~/.ssh/authorized_keys"

# OR window 10

scp .ssh/id_rsa.pub asim_username@192.168.100.188:/tmp/new_id_rsa.pub
ssh asim_username@192.168.100.188 "cat /tmp/new_id_rsa.pub >> ~/.ssh/authorized_keys"

# OR to override all old keys

scp ~/.ssh/id_rsa.pub asim@192.168.100.188:~/.ssh/authorized_keys
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
`ssh -T git@github.com`

> if ERROR: `ssh: connect to host github.com port 22: Connection timed out`
`sudo nano ~/.ssh/config`
```bash
Host github.com
    Hostname ssh.github.com
    Port 443
```
