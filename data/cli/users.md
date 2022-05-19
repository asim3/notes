## add user
```bash
sudo adduser asim

# set a password
sudo passwd my-new-user
```


## list group
```bash
cat /etc/group

# show USER groups
id

whoami
```


## add to group
```bash
# add user to sudo group
sudo adduser $USER sudo

sudo adduser $USER docker
# will be update after logout


# add asim to my_group
sudo adduser asim my_group
# OR
sudo usermod -aG my_group asim
```


## become root user
```shellscript
sudo -i
```
