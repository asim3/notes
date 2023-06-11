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


## Test DNS 
```bash
host -t A asimt.sa
# asimt.sa has address 75.2.60.5


host -t AAAA asimt.sa
# asimt.sa has no AAAA record
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


## test IPv6
[scanner](http://www.ipv6scanner.com/cgi-bin/main.py)
```bash
ping6 google.com
# ping6: connect: Network is unreachable

dig google.com AAAA
# ;; ANSWER SECTION:
# google.com.		6	IN	AAAA	2a00:1450:4006:811::200e

host -t AAAA google.com
# google.com has IPv6 address 2a00:1450:4006:811::200e
```
