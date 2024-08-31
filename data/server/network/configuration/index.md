## Linux Network Configuration
- `cat /usr/share/doc/bridge-utils/README.Debian`


## ip 
```bash
ip a
# 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
#     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
#     inet 127.0.0.1/8 scope host lo
#        valid_lft forever preferred_lft forever
#     inet6 ::1/128 scope host 
#        valid_lft forever preferred_lft forever
# 2: enp8s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
#     link/ether 52:54:00:2b:f6:b0 brd ff:ff:ff:ff:ff:ff
#     inet 192.168.137.183/24 brd 192.168.137.255 scope global dynamic noprefixroute enp8s0
#        valid_lft 3105sec preferred_lft 3105sec
#     inet6 fe80::5054:ff:fe2b:f6b0/64 scope link noprefixroute 
#        valid_lft forever preferred_lft forever
# 3: enp9s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
#     link/ether 52:54:00:74:bf:08 brd ff:ff:ff:ff:ff:ff
#     inet 192.168.122.52/24 brd 192.168.122.255 scope global dynamic noprefixroute enp9s0
#        valid_lft 2913sec preferred_lft 2913sec
#     inet6 fe80::5054:ff:fe74:bf08/64 scope link noprefixroute 
#        valid_lft forever preferred_lft forever


ip r
# default via 192.168.122.1 dev enp9s0 proto dhcp src 192.168.122.52 metric 101 
# 192.168.122.0/24 dev enp9s0 proto kernel scope link src 192.168.122.52 metric 101 
# 192.168.137.0/24 dev enp8s0 proto kernel scope link src 192.168.137.183 metric 100 
```
