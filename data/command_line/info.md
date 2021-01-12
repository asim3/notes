## System Logs
```txt
cat /var/log/syslog | tail -n 3
```


## show all commands history
```txt
history
```


## Linux Directory
```text
/root          => Root Home Directory
/tmp           => Temporary Files "will be deleted after reboot"

/opt           => Optional folder: manually installed applications
/etc           => Etcetera folder: system wide configuration files

/usr           => unix system resource
/usr/bin/      => basic users applications
/usr/sbin/     => system users applications
/usr/local/    => applications installed from source code
/usr/share/    => large applications installed from source code

/var           => Variable Files: files and directory expected to grow in size
/var/log/
/var/crash/ 
/var/tmp/

/lib           => Libraries: functions that applications can use 
/srv           => Service directory: web server or ftp server files
/mnt           => other mount drives mounted manually
/media         => other mount drives mounted by OS


# don't touch
/boot          => operating system bootloaders 
/dev           => System Hardware: All devices that are connected
/run           => Temporary Process Files "will be deleted after reboot"
/sys           => System folder: to interact with kernel "will be deleted after reboot"
/proc          => Process Information

/bin           => basic Linux applications
/sbin          => system administrator applications
```


`echo $PATH`
```text
/usr/local/sbin
/usr/local/bin    => Binary added manually by user

/usr/sbin
/usr/bin          => Binary installed by apt-get

/sbin
/bin              => kernel Binary Files

/usr/games
/usr/local/games

/snap/bin
```


## Prints the location of binary files
```txt
which python
which node
which sudo
```


## kernel info
```txt
# kernel version
uname -a

whoami

cat /etc/lsb-release
```


## IP address
```txt
ip rout
hostname -I
ip addr show

# check open ports (net sockets) (tcp ports) (udp ports)
netstat -tulpn
```


## Tree
```txt
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


## list all groups
```txt
cat /etc/group

# show user groups
id
```


## Memory & CPU Info
```txt
free -h
top
htop

# full details
cat /proc/meminfo
```

## Disk Info
```txt
df -h

# only include filesystems of a particular type
df -ht ext4

# list all drives
lsblk

# directory size
du -sh my_directory/
```


## PATH
```txt
echo $PATH
which sudo
which python

# add to PATH
PATH=/some/dir:$PATH
PATH=$PATH:/some/dir # alert: do not do this
```
