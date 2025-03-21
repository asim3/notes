[network scan](https://shodan.io)
[whois](https://who.is)


## simple wildcard DNS
```bash
ping swarm.01.192.168.122.54.nip.io
# PING swarm.01.192.168.122.54.nip.io (192.168.122.54) 56(84) bytes of data.

ping swarm.192.168.122.54.nip.io
# PING swarm.192.168.122.54.nip.io (192.168.122.54) 56(84) bytes of data.

ping 192-168-122-54.nip.io
# PING 192-168-122-54.nip.io (192.168.122.54) 56(84) bytes of data.

ping c0a87a36.nip.io
# PING c0a87a36.nip.io (192.168.122.54) 56(84) bytes of data.
# https://www.browserling.com/tools/ip-to-hex

ping 192.168.122.54.nip.io
# PING 192.168.122.54.nip.io (192.168.122.54) 56(84) bytes of data.
# 64 bytes from 192.168.122.54: icmp_seq=1 ttl=64 time=0.347 ms
# 64 bytes from 192.168.122.54: icmp_seq=2 ttl=64 time=0.233 ms
# 64 bytes from 192.168.122.54: icmp_seq=3 ttl=64 time=0.304 ms
```


## install
```bash
sudo apt -y install net-tools dnsutils iputils-ping nmap

sudo yum -y install net-tools nmap

docker container run -it --rm ubuntu:22.04 /bin/bash -c "apt -y update && apt -y install net-tools dnsutils iputils-ping nmap && /bin/bash"
```


## run test
```bash
#############
# @host-01 #
#############
cd /tmp/
python3 -m http.server 9999
# Serving HTTP on 0.0.0.0 port 9999 (http://0.0.0.0:9999/) ...



#############
# @host-02 #
#############
curl 192.168.122.229:9999
# curl: (7) Failed to connect to 192.168.122.229 port 9999: No route to host
```


## info
```bash
hostname -I
# 192.168.0.161 


ip rout
# default via 192.168.0.1 dev enp1s0 proto dhcp src 192.168.0.161 metric 100 
# 192.168.0.0/24 dev enp1s0 proto kernel scope link src 192.168.0.161 metric 100 
# 192.168.0.1 dev enp1s0 proto dhcp scope link src 192.168.0.161 metric 100 


ip addr show
# 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
#     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
#     inet 127.0.0.1/8 scope host lo
#        valid_lft forever preferred_lft forever
#     inet6 ::1/128 scope host 
#        valid_lft forever preferred_lft forever
# 2: enp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
#     link/ether 52:54:00:ca:a2:19 brd ff:ff:ff:ff:ff:ff
#     inet 192.168.0.161/24 metric 100 brd 192.168.0.255 scope global dynamic enp1s0
#        valid_lft 2321sec preferred_lft 2321sec
#     inet6 fe80::5054:ff:feca:a219/64 scope link 
#        valid_lft forever preferred_lft forever
```


## list all listening sockets
Another utility to investigate sockets
```bash
ss -lt

ss -ltup
#    -l, --listening     display listening sockets
#    -p, --processes     show process using socket
#    -t, --tcp           display only TCP sockets
#    -u, --udp           display only UDP sockets
#    -x, --unix          display only Unix domain sockets

netstat -nltup

netstat -nlt
# Active Internet connections (only servers)
# Proto Recv-Q Send-Q Local Address           Foreign Address         State      
# tcp        0      0 127.0.0.2:222           0.0.0.0:*               LISTEN     
# tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN     
# tcp        0      0 0.0.0.0:33              0.0.0.0:*               LISTEN     
# tcp6       0      0 :::111                  :::*                    LISTEN     
```


## ns lookup
```bash
nslookup asim.sa
# ;; communications error to 127.0.0.53#53: timed out
# Server:		127.0.0.53
# Address:	127.0.0.53#53

# Non-authoritative answer:
# Name:	asim.sa
# Address: 145.239.11.148
```


## connect to remote host
```bash
telnet 192.168.0.161 8000
# Trying 192.168.0.161...
# telnet: Unable to connect to remote host: Connection refused


telnet 192.168.0.161 22
# Trying 192.168.0.161...
# Connected to 192.168.0.161.
# Escape character is '^]'.
# SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.3
# aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
# Invalid SSH identification string.
# Connection closed by foreign host.


telnet 192.168.0.161 2049
# Trying 192.168.0.161...
# Connected to 192.168.0.161.
# Escape character is '^]'.
# aaaaaaaaaaaaaaaaaaaaaaaaa
# Connection closed by foreign host.
```


## ping
```bash
ping -c 4 192.168.0.161
# PING 192.168.0.161 (192.168.0.161) 56(84) bytes of data.
# 64 bytes from 192.168.0.161: icmp_seq=1 ttl=64 time=0.097 ms
# 64 bytes from 192.168.0.161: icmp_seq=2 ttl=64 time=0.067 ms
# 64 bytes from 192.168.0.161: icmp_seq=3 ttl=64 time=0.043 ms
# 64 bytes from 192.168.0.161: icmp_seq=4 ttl=64 time=0.046 ms
# --- 192.168.0.161 ping statistics ---
# 4 packets transmitted, 4 received, 0% packet loss, time 3058ms
# rtt min/avg/max/mdev = 0.043/0.063/0.097/0.021 ms


ping asimt.sa
# 64 bytes from acd89244c803f7181.awsglobalaccelerator.com (75.2.60.5): icmp_seq=1 ttl=119 time=17.2 ms

ping -6 asimt.sa
# ping: asimt.sa: No address associated with hostname

ping6 asimt.sa
# ping6: asimt.sa: No address associated with hostname
```


## n map
port scanning, top 100 ports
```bash
nmap asim3.com
# Nmap scan report for asim3.com (172.104.255.49)
# PORT          STATE        SERVICE
# 80/tcp        open         http
# 119/tcp       filtered     nntp
# 179/tcp       open         bgp
# 445/tcp       filtered     microsoft-ds
# 2601/tcp      open         zebra
# 2605/tcp      open         bgpd


# info
nmap -sT -p- 192.168.122.173

# full info
nmap -sC -sV 192.168.122.173

# full info slow
nmap -sC -sV -sT -p- 192.168.122.173
```


## whois
```bash
whois asim3.com
#    Domain Name: ASIM3.COM
#    Updated Date: 2021-07-14T23:21:52Z
#    Creation Date: 2021-07-14T23:03:59Z
#    Registry Expiry Date: 2022-07-14T23:03:59Z

#    Registrar: GoDaddy.com, LLC
#    Registrar WHOIS Server: whois.godaddy.com
#    Registrar URL: http://www.godaddy.com
#    Registrar Abuse Contact Email: abuse@godaddy.com
#    Registrar Abuse Contact Phone: 480-624-2505

#    Name Server: GRACIE.NS.CLOUDFLARE.COM
#    Name Server: RODNEY.NS.CLOUDFLARE.COM

#    DNSSEC: unsigned
```


## (old)
```bash
ifconfig
ip/ifconfig
```
