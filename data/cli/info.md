## kernel info
```bash
cat /etc/os-release
# NAME="AlmaLinux"
# PRETTY_NAME="AlmaLinux 9.4 (Seafoam Ocelot)"
# VERSION="9.4 (Seafoam Ocelot)"
# VERSION_ID="9.4"
# ID="almalinux"
# ID_LIKE="rhel centos fedora"
# ...

cat /etc/os-release
# NAME="Ubuntu"
# PRETTY_NAME="Ubuntu 22.04.4 LTS"
# VERSION="22.04.4 LTS (Jammy Jellyfish)"
# VERSION_ID="22.04"
# ID=ubuntu
# ID_LIKE=debian
# ...


lsb_release -a
# Distributor ID:	Ubuntu
# Description:	Ubuntu 22.04.4 LTS
# Release:	22.04
# Codename:	jammy


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


cat /etc/redhat-release
# AlmaLinux release 9.4 (Seafoam Ocelot)


uname -a
# Linux home-main 4.19.0-13-amd64 #1 SMP Debian 4.19.160-2 (2020-11-28) x86_64 GNU/Linux
```


## Linux Directory
```text
/root          => Root Home Directory
/tmp           => Temporary Files "will be deleted after reboot"

/opt           => Optional folder: manually installed applications

/etc           => Etcetera folder: system wide configuration files
/etc/passwd    => plain text database of all user accounts 
/etc/shadow    => plain text database of all user passwords 

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


## PATH
```bash
echo $PATH
which sudo
which python

# add to PATH
PATH=/some/dir:$PATH
PATH=$PATH:/some/dir # alert: do not do this
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


## list of installed packages
```bash
sudo yum list installed
sudo yum list installed | grep mysql
```


## binary location
Prints the location of binary files
```bash
which python
which node
which sudo


# Display ls command location along with man page path
whereis nano
whereis python

type -p nano
type -p python
```


## IP address
```bash
ip rout
hostname -I
ip addr show
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
