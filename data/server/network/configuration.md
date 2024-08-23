## Linux Network Configuration
- `cat /usr/share/doc/bridge-utils/README.Debian`


## Debian: Update IPs
(DHCP)
```bash
sudo dhclient -v
# DHCPDISCOVER on enp8s0 to 255.255.255.255 port 67 interval 8
# DHCPDISCOVER on enp1s0 to 255.255.255.255 port 67 interval 4
# DHCPOFFER of 192.168.122.38 from 192.168.122.1
# DHCPREQUEST for 192.168.122.38 on enp1s0 to 255.255.255.255 port 67
# DHCPACK of 192.168.122.38 from 192.168.122.1
# RTNETLINK answers: File exists
# bound to 192.168.122.38 -- renewal in 1610 seconds.
```


## Debian: net conf
```bash
tree /etc/network/
# ├── if-down.d
# │   └── resolved
# ├── if-post-down.d
# ├── if-pre-up.d
# ├── if-up.d
# │   └── resolved
# ├── interfaces
# └── interfaces.d
```


## Debian: net conf
`cat /etc/network/interfaces`
```bash
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug enp1s0
iface enp1s0 inet dhcp
```


## Debian: Setup net conf
`sudo nano /etc/network/interfaces`
```bash
auto enp1s0
iface enp1s0 inet dhcp

# OR

auto enp1s0
iface enp1s0 inet static
  address 192.168.122.222
  netmask 255.255.255.0
  gateway 192.168.122.255

auto enp8s0
iface enp8s0 inet static
  address 192.168.137.222
  netmask 255.255.255.0
  gateway 192.168.137.255
```


## Ubuntu net conf
`cat /etc/netplan/01-network-manager-all.yaml`
```yml
# Let NetworkManager manage all devices on this system
network:
  version: 2
  renderer: NetworkManager
```
> Ubuntu 17.10 switched from ifupdown (which uses the `/etc/network/interfaces`
  file) to netplan. You can find configuration examples and documentation 
  on https://netplan.io.



## AlmaLinux: net conf
```bash
ip a
# 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
#     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
#     inet 127.0.0.1/8 scope host lo
#        valid_lft forever preferred_lft forever
#     inet6 ::1/128 scope host 
#        valid_lft forever preferred_lft forever
# 2: enp8s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
#     link/ether 52:54:00:2b:29:d0 brd ff:ff:ff:ff:ff:ff
#     inet 192.168.122.228/24 brd 192.168.122.255 scope global dynamic noprefixroute enp8s0
#        valid_lft 3563sec preferred_lft 3563sec
#     inet6 fe80::562a:6ed5:a58a:1101/64 scope link noprefixroute 
#        valid_lft forever preferred_lft forever
# 3: enp9s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
#     link/ether 52:54:00:05:5b:37 brd ff:ff:ff:ff:ff:ff
#     inet 192.168.137.170/24 brd 192.168.137.255 scope global dynamic noprefixroute enp9s0
#        valid_lft 3563sec preferred_lft 3563sec
#     inet6 fe80::7dd7:1a1:8c55:d4a1/64 scope link noprefixroute 
#        valid_lft forever preferred_lft forever



ip r
# default via 192.168.122.1 dev enp8s0 proto dhcp src 192.168.122.228 metric 100 
# 192.168.122.0/24 dev enp8s0 proto kernel scope link src 192.168.122.228 metric 100 
# 192.168.137.0/24 dev enp9s0 proto kernel scope link src 192.168.137.170 metric 101 
```


## AlmaLinux: net conf 1
`cat /etc/sysconfig/network-scripts/ifcfg-ens1`
```ini
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
IPADDR=192.168.122.221
NETMASK=255.255.255.0
GATEWAY=192.168.122.1
DNS1=8.8.8.8
DNS2=8.8.4.4
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=no
NAME=ens1
DEVICE=ens1
ONBOOT=yes
```


## AlmaLinux: net conf 2
`cat /etc/sysconfig/network-scripts/ifcfg-ens2`
```ini
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
IPADDR=192.168.137.222
NETMASK=255.255.255.0
GATEWAY=192.168.137.1
DNS1=8.8.8.8
DNS2=8.8.4.4
DEFROUTE=no
IPV4_FAILURE_FATAL=no
IPV6INIT=no
NAME=ens2
DEVICE=ens2
ONBOOT=yes
```


## test net
```bash
route -n

# test GATEWAY
ping 192.168.122.1
ping 192.168.137.1

# test self
ping 192.168.122.228
ping 192.168.137.170
```
