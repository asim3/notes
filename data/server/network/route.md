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


## get every router
get every router involved in transferring the data
```bash
traceroute localhost
# traceroute to localhost (127.0.0.1), 30 hops max, 60 byte packets
#  1  localhost (127.0.0.1)  0.288 ms  0.203 ms  0.185 ms


traceroute google.com
# traceroute to google.com (216.58.198.78), 30 hops max, 60 byte packets
#  1  my-laptop (192.168.22.1)  0.234 ms  0.217 ms  0.204 ms
#  2  _gateway (192.168.10.1)  4.945 ms  4.972 ms  5.148 ms
#  3  10.0.192.34 (10.0.192.34)  11.343 ms  15.393 ms  13.385 ms
#  4  10.0.3.159 (10.0.3.159)  24.432 ms 10.0.3.157 (10.0.3.157)  15.352 ms 10.0.3.159 (10.0.3.159)  24.410 ms
#  5  * * *
#  6  10.0.9.130 (10.0.9.130)  15.274 ms * *
#  7  10.0.9.36 (10.0.9.36)  24.317 ms 10.0.9.109 (10.0.9.109)  25.254 ms 10.0.9.36 (10.0.9.36)  25.210 ms
#  8  72.14.220.248 (72.14.220.248)  86.000 ms * 72.14.197.0 (72.14.197.0)  78.127 ms
#  9  192.178.105.91 (192.178.105.91)  71.704 ms *  71.744 ms
# 10  192.178.81.162 (192.178.81.162)  87.278 ms 172.253.67.157 (172.253.67.157)  72.926 ms 172.253.67.155 (172.253.67.155)  78.006 ms
# 11  dub08s02-in-f14.1e100.net (216.58.198.78)  71.588 ms  72.850 ms  73.427 ms


traceroute fb.com
# traceroute to fb.com (31.13.69.35), 30 hops max, 60 byte packets
#  1  my-laptop (192.168.22.1)  0.463 ms  0.420 ms  0.405 ms
#  2  _gateway (192.168.10.1)  5.330 ms  5.337 ms  5.560 ms
#  3  10.0.192.34 (10.0.192.34)  13.982 ms  14.165 ms  13.950 ms
#  4  10.0.3.157 (10.0.3.157)  14.136 ms 10.0.3.159 (10.0.3.159)  22.160 ms 10.0.3.157 (10.0.3.157)  14.106 ms
#  5  * * *
#  6  10.0.6.244 (10.0.6.244)  14.054 ms 10.0.9.161 (10.0.9.161)  15.491 ms 10.0.9.169 (10.0.9.169)  15.449 ms
#  7  10.0.9.20 (10.0.9.20)  39.484 ms 10.0.9.109 (10.0.9.109)  26.072 ms 10.0.9.20 (10.0.9.20)  34.248 ms
#  8  ae4.pr04.pmo1.tfbnw.net (157.240.67.216)  65.633 ms ae3.pr03.pmo1.tfbnw.net (157.240.77.130)  66.840 ms ae7.pr04.pmo1.tfbnw.net (157.240.68.70)  64.931 ms
#  9  po203.asw01.pmo1.tfbnw.net (157.240.102.172)  64.169 ms po203.asw02.pmo1.tfbnw.net (157.240.102.176)  64.150 ms po203.asw03.pmo1.tfbnw.net (157.240.102.180)  65.227 ms
# 10  psw01.pmo1.tfbnw.net (129.134.95.230)  65.214 ms psw03.pmo1.tfbnw.net (129.134.95.228)  70.802 ms psw02.pmo1.tfbnw.net (129.134.95.229)  65.068 ms
# 11  msw1ae.01.pmo1.tfbnw.net (129.134.95.190)  70.747 ms msw1ai.01.pmo1.tfbnw.net (129.134.90.36)  70.805 ms msw1ar.01.pmo1.tfbnw.net (129.134.90.21)  64.999 ms
```
