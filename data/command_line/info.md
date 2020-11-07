## Linux Directory
```text
/etc           => Configuration files
/var           => Variable Files
/usr           => User Installed Programs 

/tmp           => Temporary Files "will be deleted after reboot"
/var/tmp/
/usr/tmp/

/bin           => User Binary Files
/sbin          => Root Binary Files
/root          => Root Home Directory

/dev           => All devices that are connected
/lib           => System Libraries
/media         => Mount point for removable media
/mnt           => Mount point for temporary file systems
/opt           => Optional Add-on applications
/srv           => systemctl Files !!
/proc          => Process Information

/lost+found    => Misplaced Data
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

## System Libraries
```txt
/lib/
/usr/lib/
/usr/local/lib/
```


## kernel info
```txt
# kernel version
uname -a

whoami

cat /etc/lsb-release
```


## show processes running in memory
```txt
ps aux
watch 'ps aux'
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

# show all my groups
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

## process
```txt
pstree
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


## show all commands history
```txt
history
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


## Prints the location of binary files
```txt
which python
which node
which sudo
```
