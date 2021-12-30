## network
[network scan](shodan.io)
```bash
# NMAP - portscanning (range of ports/top 100 ports/fingerprinting)
nslookup

whois

nc (netcat) : portlistening

traceroute

ip/ifconfig
```
## 
```bash
nslookup asim3.com
Server:		127.0.0.53
Address:	127.0.0.53#53

Non-authoritative answer:
Name:	asim3.com
Address: 172.104.255.49
```


## n map
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
