## System Logs
```bash
cat /var/log/syslog | tail -n 3
```


## find largest file
```bash
du -a /var/         | sort -n -r | head -n 20

du -a / 2>/dev/null | sort -n -r | head -n 20

sudo du -a / 2>/dev/null | sort -n -r | head -n 20
```


## History
show all commands history
```bash
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


## binary location
Prints the location of binary files
```bash
which python
which node
which sudo
```

 
## dynamic libraries
Prints the location of dynamic libraries of a binary
```bash
ldd /usr/bin/nodejs 
# linux-vdso.so.1 (0x00007ffcce5c8000)
# libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f068770c000)
# libstdc++.so.6 => /usr/lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007f0687383000)
# libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f0686fe5000)
# libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007f0686dcd000)
# libpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f0686bae000)
# libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f06867bd000)
# /lib64/ld-linux-x86-64.so.2 (0x00007f0687910000)
ldd /usr/bin/python3
# linux-vdso.so.1 (0x00007ffe9ff2d000)
# libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f434d68f000)
# libpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f434d470000)
# libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f434d26c000)
# libutil.so.1 => /lib/x86_64-linux-gnu/libutil.so.1 (0x00007f434d069000)
# libexpat.so.1 => /lib/x86_64-linux-gnu/libexpat.so.1 (0x00007f434ce37000)
# libz.so.1 => /lib/x86_64-linux-gnu/libz.so.1 (0x00007f434cc1a000)
# libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f434c87c000)
# /lib64/ld-linux-x86-64.so.2 (0x00007f434da80000)
```


## kernel info
```bash
uname -a
# Linux home-main 4.19.0-13-amd64 #1 SMP Debian 4.19.160-2 (2020-11-28) x86_64 GNU/Linux


lsb_release -a
# Distributor ID:	Debian
# Description:	Debian GNU/Linux 10 (buster)
# Release:	10
# Codename:	buster


lsb_release -is
# Debian


lsb_release -cs
# buster


distributor=$(lsb_release -is)
echo ${distributor,,}
debian
```


## IP address
```bash
ip rout
hostname -I
ip addr show

# check open ports (net sockets) (tcp ports) (udp ports)
netstat -tulpn
```


## list all groups
```bash
cat /etc/group

# show user groups
id

whoami
```


## Memory & CPU Info
```bash
free -h
top
htop

# full details
cat /proc/meminfo
```


## CPU Info
```bash
lscpu
lscpu -p

nproc --all
# OR
lscpu | egrep '^CPU\(s\):' | awk -F " " '{print $2}'

cat /proc/cpuinfo

getconf -a
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


## PATH
```bash
echo $PATH
which sudo
which python

# add to PATH
PATH=/some/dir:$PATH
PATH=$PATH:/some/dir # alert: do not do this
```
