Files archive
```text
# new tar file
tar -cf my_archive.tar my_file.txt
tar -cf dir_archive.tar ./my_dir/

# Extract tar file
tar -xf my_archive.tar
tar -xvf my_archive.tar # print all files verbosely

# List all files in my_archive.tar
tar -tf my_archive.tar
tar -tvf my_archive.tar

# print all files while adding to archive
tar -cvf my_archive.tar my_file.txt 
```


gzipped archive >> super small size
```text
tar -czf my_archive.tar.gz /var/my_dir/
tar -xzf my_archive.tar.gz
```



add user
```text
sudo adduser asim

# list all groups
cat /etc/group

# set a password
sudo passwd my-new-user

# add user to sudo group
sudo adduser asim sudo

# add asim to my_group
sudo adduser asim my_group

# show all my groups
id
```


add a hard link "shortcut"
```text
ln ~/Downloads/my_file.pdf ~/Desktop/short_cut.aaaaa
sudo ln -s /usr/local/lib/nodejs/node-v10.16.3-linux-x64/bin/node /usr/bin/node
```



Edit bash init file
```text
nano ~/.bashrc
nano ~/.bash_profile # for macOS
nano /etc/profile # for all users except root
```


```text
# add to ~/.bashrc
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```



Aliases (shortcut for terminal commands)
```text
# add to ~/.bash_aliases
alias ddd="cd ~/Desktop/"
```


connect domain names with IP addresses in local computer 
```text
sudo nano /etc/hosts
```


Show running process name
```text
pgrep -l sys
pgrep -l python
pgrep -l firefox
```


Stop running process by name
```text
pkill python
pkill firefox
pkill gunicorn

killall python3
```


Print or check checksums
```text
# MD5 (128-bit)
md5sum filename
# check
md5sum -c md5sum.txt 

# SHA256 (256-bit)
sha256sum filename
```
