## start ssh temporary
```bash
ssh asim@192.168.122.200
# asim@192.168.122.200: Permission denied (publickey).

cat /home/asim/test-ssh-asim/id_by_asim.pub 
# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPmWZ8fzMIgRMh1+dCD+QKRRGp0GCfUUMXRoTLx9BzXx test-1@swarm-6

ssh-add -l
# Could not open a connection to your authentication agent.

# Start the ssh-agent in the background
eval "$(ssh-agent -s)"
# Agent pid 1218

ssh-add -l
# The agent has no identities.

# add your key
ssh-add /home/asim/test-ssh-asim/id_by_asim
# Identity added: /home/asim/test-ssh-asim/id_by_asim (test-1@swarm-6)

ssh-add -l
# 256 SHA256:8Tjc5EA04by4HHJTd1zTWXMG1V7Ahw+hEJKwT83zxAE test-1@swarm-6 (ED25519)

ssh asim@192.168.122.200
# Last login: Sun Feb 25 19:12:44 2024
# asim@runner-hub-1:~$ 
```


## Get fingerprint
```bash
ssh-keygen -l -f ~/.ssh/id_ed25519
# 256 SHA256:KHzEcaes5BlSwvrhbVOs7QTNbL2J3ZD4c7rIkyun4+0 test-1 (ED25519)

ssh-keygen -l -f ~/.ssh/id_ed25519.pub
# 256 SHA256:KHzEcaes5BlSwvrhbVOs7QTNbL2J3ZD4c7rIkyun4+0 test-1 (ED25519)
```


## ssh config
change SSH port number 
`sudo nano ~/.ssh/config`
```bash
Host github.com
    Hostname ssh.github.com
    Port 443
```


## Manual
> `man ssh-keygen`
> `man ssh_config`


```txt
-q              Silence ssh-keygen.
-t              Specifies the type of key to create. [dsa|ecdsa|ed25519|rsa]
-f filename     Specifies the filename of the key file.
```


## certificates
```txt
-s ca_key                   Certify (sign) a public key using the specified CA key.
-I certificate_identity     Specify the key identity when signing a public key.
-h                          When signing a key, create a host certificate instead of a user certificate.
```


# !!!
```bash
ssh-keygen -s /path/to/ca_key -I key_id    /path/to/user_key.pub
ssh-keygen -s /path/to/ca_key -I key_id -h /path/to/host_key.pub
```
