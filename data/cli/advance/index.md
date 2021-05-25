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
