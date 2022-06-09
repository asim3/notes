## add user
```bash
sudo adduser asim

# set a password
sudo passwd my-new-user
```


## list users
```bash
cat /etc/passwd

grep 'asim' /etc/passwd
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
```bash
sudo -i
```


## rename user
```bash
sudo -i

usermod -l new-name old-name

# or only update UID from 1000 to 1002

usermod -u 1002 old-name
```
