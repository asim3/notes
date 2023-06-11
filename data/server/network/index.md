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
