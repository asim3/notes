## install
```bash
sudo apt install net-tools
```


## route
```bash
ip route 
# default via ...
# 0.0.0.0/16 dev  wlp0s4     scope   link     metric   1000 
# 0.0.0.0/24 dev  wlp0s4     proto   kernel   scope    link src 1.1.1.1 metric    600 
# 0.0.0.0/16 dev  docker     proto   kernel   scope    link src 1.1.1.1 linkdown 
# 0.0.0.0/24 dev  vboxnet    proto   kernel   scope    link src 1.1.1.1 
```


## list routing table
```bash
route
# Kernel IP routing table

# Destination     Gateway         Gen mask        Flags Metric Ref    Use Iface
# default         _gateway        0.0.0.0         UG    600    0        0 wlp2s0
# link-local      0.0.0.0         255.255.0.0     U     1000   0        0 virbr0
# 172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
# 172.18.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-6a843b722481
# 172.19.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-a09d6d3988f3
# 172.20.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-352f521dfb72
# 172.20.10.0     0.0.0.0         255.255.255.240 U     600    0        0 wlp2s0
# 172.21.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-deeaab84ac0d
# 172.22.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-bfb22b62e47a
# 172.23.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-44526eaa5e73
# 192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0
```
