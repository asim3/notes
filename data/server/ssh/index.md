[SSH Audit](ssh-audit.com)


## generate key
> if you want to change the key name make sure to put the full directory path
```bash
ssh-keygen -t ed25519 -C "test-1@asimt.sa"

ssh-keygen -t rsa -b 4096 -C "test-2@asimt.sa"

# -t ed25519 : EdDSA performs much faster and provides the same level of security with significantly smaller keys
# -t rsa     : old - universally supported
# -t dsa     : Just don’t use ECDSA/DSA!
# -t ecdsa   : Just don’t use ECDSA/DSA!
```


## Copy public key
Copy public key to remote server
> make sure you add it to .ssh/authorized_keys file
```txt
ssh-copy-id asim@10.68.15.202

# OR
ssh asim@192.168.100.188 "echo $(cat .ssh/id_rsa.pub) >> ~/.ssh/authorized_keys"

# OR window 10
scp .ssh/id_rsa.pub asim_username@192.168.100.188:/tmp/new_id_rsa.pub
ssh asim_username@192.168.100.188 "cat /tmp/new_id_rsa.pub >> ~/.ssh/authorized_keys"

# OR to override all old keys
scp ~/.ssh/id_rsa.pub asim@192.168.100.188:~/.ssh/authorized_keys
```


## authorized keys
list all authorized keys in the server
```txt
cat ~/.ssh/authorized_keys 
```


## Copy files
```bash
scp ~/local.txt username@remote.server.ip:~/remote/q
 
# Recursively copy entire directories
scp -r /my_var/ username@192.168.100.166:/var/
scp -r username@192.168.100.166:/var/ /my_var/
```
