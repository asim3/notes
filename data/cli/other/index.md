[lists of official GNU packages](http://www.gnu.org/manual/manual.html)

## Date
```bash
date 
# Sun Aug 27 08:58:55 UTC 2023
date "+%x -- %X"
# 08/27/23 -- 08:58:55
date "+%x"
# 08/27/23
date "+%T"
# 08:58:55
date "+%X"
# 08:58:55
date "+%H -- %M -- %S"
# 08 -- 58 -- 55
```


## System Logs
```bash
journalctl -f # --follow

# only from this boot
journalctl -b # --boot

journalctl -u ssh
journalctl -u systemd-timesyncd
journalctl -u cloud-init

journalctl | grep 'asim'

journalctl --list-boots
```


## List all units
```bash
systemctl list-unit-files --all

journalctl -u ssh
journalctl -u systemd-timesyncd
journalctl -u cloud-init
```


## template
```bash
echo 'Hello $USER in $MYEEE. Done.' > ./my_template.txt


export MYEEE='my home' ; cat ./my_template.txt | envsubst 
# Hello asim in my home. Done.
```


## Tree
```bash
sudo apt  install tree

mkdir test-tree
mkdir test-tree/file1
mkdir test-tree/file2
mkdir test-tree/file3
touch test-tree/file1/file1.txt
touch test-tree/file1/file2.txt

tree test-tree/
test-tree/
├── file1
│   ├── file1.txt
│   └── file2.txt
├── file2
└── file3

3 directories, 2 files
```


## Shell Options
Set or unset values of shell options and positional parameters
```bash
set -ex 
#   -e  Exit immediately if a command exits with a non-zero status.
#   +e  Do not ...
#   -x  Print commands and their arguments as they are executed.
#   +x  Do not ...
```


## History
show all commands history
```bash
history
```


## Shutdown
```txt
# Log Out 
exit

sudo reboot
sudo shutdown -r
sudo shutdown now
sudo shutdown -P now

shutdown +30 "Leave to pickup friend!"
```


## Math
```bash
# Addition
expr 7 + 1
# 2


# Subtraction
expr 10 - 1
# 9


# Division
expr 10 / 3
# 3


# Multiplication
expr 9 \* 3
# 27


expr 10 / 3 | expr 

#   ARG1 | ARG2       ARG1 if it is neither null nor 0, otherwise ARG2
#   ARG1 & ARG2       ARG1 if neither argument is null or 0, otherwise 0

#   ARG1 < ARG2       ARG1 is less than ARG2
#   ARG1 <= ARG2      ARG1 is less than or equal to ARG2
#   ARG1 = ARG2       ARG1 is equal to ARG2
#   ARG1 != ARG2      ARG1 is unequal to ARG2
#   ARG1 >= ARG2      ARG1 is greater than or equal to ARG2
#   ARG1 > ARG2       ARG1 is greater than ARG2

#   ARG1 % ARG2       arithmetic remainder of ARG1 divided by ARG2
```


## find largest file
```bash
du -a /var/         | sort -n -r | head -n 20

du -a / 2>/dev/null | sort -n -r | head -n 20

sudo du -a / 2>/dev/null | sort -n -r | head -n 20
```


## fix broken packages
```txt
# fix broken packages
sudo apt-get install -f 
sudo dpkg --configure -a

# cleans the packages and install script in /var/cache/apt/archives/
sudo apt clean

# cleans obsolete deb-packages, less than clean
sudo apt autoclean

# removes orphaned packages which are not longer needed
sudo apt autoremove
```
