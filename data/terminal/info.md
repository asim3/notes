# Info

## kernel info
```bash
# kernel version
uname -a

whoami

cat /etc/lsb-release
```


## show processes running in memory
```bash
ps aux
watch 'ps aux'
```


## IP address
```bash
ip rout
hostname -I
ip addr show

# check open ports (net sockets) (tcp ports) (udp ports)
netstat -tulpn
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


## list all groups
```bash
cat /etc/group

# show all my groups
id
```


## Memory & CPU Info
```bash
free -h
top
htop

# full details
cat /proc/meminfo
```


## Disk Info
```bash
df -h

# only include filesystems of a particular type
df -ht ext4

# list all drives
lsblk

# directory size
du -sh my_directory/
```


## show all commands history
```bash
history
```


## PATH
```bash
echo $PATH
which sudo
which python

# add to PATH
PATH=/some/dir:$PATH
PATH=$PATH:/some/dir # alert: do not do this
```


## Prints the location of binary files
```bash
which python
which node
which sudo
```
