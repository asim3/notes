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


## soft link & hard link
```bash
ln file1 s-link-0
# force
ln -f file1 sf-link-0

# soft links "symbolic"
ln -s file1 s-link-1
ln -s /tmp/dir1/file1 s-link-2

# relative to link location
ln -sr dir1/file1 sr-link-3

ll 
# lrwxrwxrwx 1 asim asim   18 Feb 14 23:28 s-link-1 -> file1
# lrwxrwxrwx 1 asim asim   18 Feb 14 23:28 s-link-2 -> /tmp/dir1/file1
# lrwxrwxrwx 1 asim asim   12 Feb 14 23:29 sr-link-3 ->  ../dir1/file1
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
