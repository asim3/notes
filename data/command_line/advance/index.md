[lists of official GNU packages](http://www.gnu.org/manual/manual.html)


## Files archive
```bash
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


## gzipped archive >> super small size
```bash
tar -czf my_archive.tar.gz /var/my_dir/
tar -xzf my_archive.tar.gz
```


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


## copy all photo in a directory
```bash
find . -name \*.jpg -exec cp {} ~/my-new-jpg \;
```


## add a hard link "shortcut"
```bash
ln ~/Downloads/my_file.pdf ~/Desktop/short_cut.aaaaa
sudo ln -s /usr/local/lib/nodejs/node-v10.16.3-linux-x64/bin/node /usr/bin/node
```


## Aliases 
shortcut for terminal commands
```bash
# add to ~/.bash_aliases
alias ddd="cd ~/Desktop/"
```


## connect domain names with IP addresses in local computer 
```bash
sudo nano /etc/hosts
```


## locate binary
```bash
# Display ls command location along with man page path
whereis nano
whereis python

type -p nano
type -p python
```


## Show running process name
```bash
pgrep -l sys
pgrep -l python
pgrep -l firefox
```


## Stop running process by name
```bash
pkill python
pkill firefox
pkill gunicorn

killall python3
```
