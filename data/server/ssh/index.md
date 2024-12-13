[SSH Audit](ssh-audit.com)


## generate key
> if you want to change the key name make sure to put the full directory path
```bash
ssh-keygen -t ed25519 -C "test-1@asimt.sa"

ssh-keygen -t rsa -b 4096 -C "test-2@asimt.sa"

# Lists fingerprints of all identities currently represented by the agent.
ssh-add -l


# -t ed25519 : EdDSA performs much faster and provides the same level of security with significantly smaller keys
# -t rsa     : old - universally supported
# -t dsa     : Just don’t use ECDSA/DSA!
# -t ecdsa   : Just don’t use ECDSA/DSA!


ssh-keygen -t ed25519 -C "test-3@asimt.sa" -P "" -f ~/.ssh/id_ed25519
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

# OR root
mkdir -p /home/asim/.ssh
chmod 700 /home/asim/.ssh
chown asim:asim /home/asim/.ssh
echo 'ssh-ed25519 ANza1/4  (id_ed25519.pub)' > /home/asim/.ssh/authorized_keys
chmod 600 /home/asim/.ssh/authorized_keys
chown asim:asim /home/asim/.ssh/authorized_keys
```


## Git Host key
```bash
ssh-keyscan 192.168.122.88
# 192.168.122.88 ssh-rsa AAAAB3NzaC1yc2EAAAAD...
# 192.168.122.88 ecdsa-sha2-nistp256 AAAAE2Vj...
# 192.168.122.88 ssh-ed25519 AAAAC3NzaC1lZDI1...


ssh-keyscan -t ssh-ed25519 192.168.122.88
# 192.168.122.88 ssh-ed25519 AAAAC3NzaC1lZDI1...


ssh-keyscan -H -t ssh-ed25519 192.168.122.88
# |1|aSTWYuKTApRW6RpUTtSmhsbvgl0=|MYlq9FLDqLBNPwDy+ZUn84WBaEE= ssh-ed25519 AAAAC3NzaC1lZDI1...
# |1|P9TjK8kfVoTTD7oPeEk3aVWbVPA=|J469cgXbtl7rbRaYNMmTcwDOf88= ssh-ed25519 AAAAC3NzaC1lZDI1...


ssh-keyscan -H -t ssh-ed25519 192.168.122.88 >> ./ssh/known_hosts
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


## known_hosts
```bash
# auto add a new host to known_hosts
ssh -o StrictHostKeyChecking=no  username@192.168.100.166
```
