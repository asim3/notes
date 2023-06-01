[network scan](shodan.io)


## ping
```bash
ping asimt.sa
# 64 bytes from acd89244c803f7181.awsglobalaccelerator.com (75.2.60.5): icmp_seq=1 ttl=119 time=17.2 ms

ping -6 asimt.sa
# ping: asimt.sa: No address associated with hostname

ping6 asimt.sa
# ping6: asimt.sa: No address associated with hostname
```


## Test DNS
```bash
dig asimt.sa
# ;; QUESTION SECTION:
# ;asimt.sa.			IN	A
# ;; ANSWER SECTION:
# asimt.sa.		7128	IN	A	75.2.60.5


dig asimt.sa AAAA
# ;; QUESTION SECTION:
# ;asimt.sa.			IN	AAAA
```


## Test DNS 
```bash
host -t A asimt.sa
# asimt.sa has address 75.2.60.5


host -t AAAA asimt.sa
# asimt.sa has no AAAA record
```


## test IPv6
```bash
ping6 google.com
# ping6: connect: Network is unreachable

dig google.com AAAA
# ;; ANSWER SECTION:
# google.com.		6	IN	AAAA	2a00:1450:4006:811::200e

host -t AAAA google.com
# google.com has IPv6 address 2a00:1450:4006:811::200e
```


## list all listening sockets
Another utility to investigate sockets
```bash
ss -ltup

#    -l, --listening     display listening sockets
#    -p, --processes     show process using socket
#    -t, --tcp           display only TCP sockets
#    -u, --udp           display only UDP sockets
#    -x, --unix          display only Unix domain sockets
```


## ns lookup
```bash
nslookup asim3.com
# Server:  127.0.0.53
# Address: 127.0.0.53#53

# Non-authoritative answer:
# Name:	asim3.com
# Address: 172.104.255.49
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


## DNS
```bash
dig www.asimt.sa +nostats +nocomments +nocmd
# ;www.asimt.sa.			IN	A
# www.asimt.sa.		86400	IN	CNAME	asim3.github.io.
# asim3.github.io.	3599	IN	A	185.199.110.153
# asim3.github.io.	3599	IN	A	185.199.109.153
# asim3.github.io.	3599	IN	A	185.199.108.153
# asim3.github.io.	3599	IN	A	185.199.111.153
```


[wildcard DNS](nip.io)
## nip
```bash
dig 3.3.3.3.nip.io  +nostats +nocomments +nocmd
# ;3.3.3.3.nip.io.			IN	A
# 3.3.3.3.nip.io.		86400	IN	A	3.3.3.3


dig 9.9.9.9.nip.io  +nostats +nocomments +nocmd
# ;9.9.9.9.nip.io.			IN	A
# 9.9.9.9.nip.io.		86400	IN	A	9.9.9.9


dig 9-9-9-9.nip.io  +nostats +nocomments +nocmd
# ;9-9-9-9.nip.io.			IN	A
# 9-9-9-9.nip.io.		86400	IN	A	9.9.9.9
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


## route
```bash
ip route 
# default via ...
# 0.0.0.0/16 dev  wlp0s4     scope   link     metric   1000 
# 0.0.0.0/24 dev  wlp0s4     proto   kernel   scope    link src 1.1.1.1 metric    600 
# 0.0.0.0/16 dev  docker     proto   kernel   scope    link src 1.1.1.1 linkdown 
# 0.0.0.0/24 dev  vboxnet    proto   kernel   scope    link src 1.1.1.1 
```


## other
```bash
traceroute

ifconfig
ip/ifconfig
```
