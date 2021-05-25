## add user
```bash
sudo adduser asim

# set a password
sudo passwd my-new-user
```


## add user to group
```bash
# show all my groups
id

# list all groups
cat /etc/group

# add user to sudo group
sudo adduser asim sudo

# add asim to my_group
sudo adduser asim my_group

# OR

sudo usermod -aG my_group asim
```


## list all groups
```bash
cat /etc/group

# show user groups
id

whoami
```
