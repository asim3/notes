## AlmaLinux 8: net conf
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


## AlmaLinux 8: net conf 1
`cat /etc/sysconfig/network-scripts/ifcfg-enp8s0`
```ini
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
IPADDR=192.168.122.221
NETMASK=255.255.255.0
GATEWAY=192.168.122.1
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=no
NAME=enp8s0
DEVICE=enp8s0
ONBOOT=yes
```


## AlmaLinux 8: net conf 2
`cat /etc/sysconfig/network-scripts/ifcfg-enp9s0`
```ini
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
IPADDR=192.168.137.222
NETMASK=255.255.255.0
GATEWAY=192.168.137.1
DEFROUTE=no
IPV4_FAILURE_FATAL=no
IPV6INIT=no
NAME=enp9s0
DEVICE=enp9s0
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
