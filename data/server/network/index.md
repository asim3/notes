[network scan](shodan.io)

## install
```bash
sudo apt -y install net-tools dnsutils iputils-ping
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

# rDNS record for 172.104.255.49: nb-172-104-255-49.frankfurt.nodebalancer.linode.com

# Not shown: 994 closed ports

# PORT          STATE        SERVICE
# 80/tcp        open         http
# 119/tcp       filtered     nntp
# 179/tcp       open         bgp
# 445/tcp       filtered     microsoft-ds
# 2601/tcp      open         zebra
# 2605/tcp      open         bgpd
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


## other
```bash
traceroute

ifconfig
ip/ifconfig
```
