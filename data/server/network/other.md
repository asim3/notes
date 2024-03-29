## list Sockets
```bash
ss -nt
# State   Recv-Q   Send-Q   Local Address:Port     Peer Address:Port
# ESTAB   0        0        192.168.100.10:51974    34.117.65.55:443
# ESTAB   0        0        192.168.100.10:50876   142.251.37.46:443
# ESTAB   0        0        192.168.100.10:36804       13.67.9.5:443



ss -ntl
# State    Recv-Q   Send-Q   Local Address:Port   Peer Address:Port
# LISTEN   0        50             0.0.0.0:445            0.0.0.0:*
# LISTEN   0        50             0.0.0.0:139            0.0.0.0:*
# LISTEN   0        128          127.0.0.1:631            0.0.0.0:*
# LISTEN   0        32        192.168.122.1:53            0.0.0.0:*
# LISTEN   0        4096      127.0.0.53%lo:53            0.0.0.0:*
# LISTEN   0        50                [::]:445               [::]:*
# LISTEN   0        50                [::]:139               [::]:*
# LISTEN   0        128              [::1]:631               [::]:*



#    -n, --numeric       don't resolve service names
#    -l, --listening     display listening sockets
#    -a, --all           display all sockets
#    -e, --extended      show detailed socket information

#    -t, --tcp           display only TCP sockets
#    -u, --udp           display only UDP sockets
#    -x, --unix          display only Unix domain sockets

#    -4, --ipv4          display only IP version 4 sockets
#    -6, --ipv6          display only IP version 6 sockets
#    -i, --info          show internal TCP information
```



# netcat 
The nc (or netcat) utility is used for just about anything under the sun 
involving `TCP`, `UDP`, or UNIX-domain sockets.  It can open `TCP` connections, 
send `UDP` packets, listen on arbitrary `TCP` and `UDP` ports, do port scanning, 
and deal with both IPv4 and IPv6.  

Unlike telnet(1), nc scripts nicely, and separates error messages onto 
standard error instead of sending them to standard output, as telnet(1) 
does with some.

> netcat connects two machine useing `TCP`, `UDP` or `IP`

## TCP vs UDP
`TCP`: Transmission Control Protocol

`UDP`: User Datagram Protocol

`TCP` is a connection-oriented protocol, whereas `UDP` is a connectionless protocol. 
A key difference between `TCP` and `UDP` is speed, as `TCP` is comparatively slower 
than `UDP`. Overall, `UDP` is a much faster, simpler, and efficient protocol, 
however, retransmission of lost data packets is only possible with `TCP`. 

Another notable discrepancy with `TCP` vs `UDP` is that `TCP` provides an 
ordered delivery of data from user to server (and vice versa), whereas 
`UDP` is not dedicated to end-to-end communications, nor does it check 
the readiness of the receiver (requiring fewer overheads and taking 
up less space).  


## chat server
```bash
nc -l -p 9000
# hi from server @ 192.168.1.105
# hi from client
```


## chat client
```bash
nc 192.168.1.105 9000
# hi from server @ 192.168.1.105
# hi from client
```


## file transfer
```bash
# @server
nc -l -w 30 9000 < /home/asim/my_file.txt


# @client
nc -v -w 2 192.168.1.105 9000 > my_new_file.txt
# Connection to 192.168.1.105 9000 port [tcp/*] succeeded!

cat my_new_file.txt 
# test netcat file
```


## banner grabbing
```bash
nc 192.168.1.105 22
# SSH-2.0-OpenSSH_8.2p1 Ubuntu-4ubuntu0.5

# OR

nc www.google.com 80
GET / HTTP/1.1 
# HTTP/1.1 200 OK
# Date: Sun, 21 Aug 2022 20:02:06 GMT
# Expires: -1
# Cache-Control: private, max-age=0
# Content-Type: text/html; charset=ISO-8859-1
# P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
# Server: gws
# X-XSS-Protection: 0
# X-Frame-Options: SAMEORIGIN
# Accept-Ranges: none
# Vary: Accept-Encoding

# 5652
# <!doctype html><html dir="rt...
```


## port scanning
FTP:  port 21
SMTP: port 25
HTTP: port 80


```bash
nc -z 192.168.1.105 22; echo $?
# 0

nc -z 192.168.1.105 25; echo $?
# 1

nc -z 192.168.1.105 80; echo $?
# 0

nc -z 192.168.1.105 8000; echo $?
# 1
```


## netcat vs nmap
```bash
nc -z -v -w 1 192.168.1.105 1-3000  2>&1 | grep succeeded
# Connection to 192.168.1.105 22 port [tcp/ssh] succeeded!
# Connection to 192.168.1.105 80 port [tcp/http] succeeded!


nmap -sT -p- 192.168.1.105
# Starting Nmap 7.80 ( https://nmap.org ) at 2022-08-21 23:32 +03
# Nmap scan report for 192.168.1.105
# Host is up (0.000090s latency).
# Not shown: 65532 closed ports
# PORT    STATE SERVICE
# 22/tcp  open  ssh
# 80/tcp  open  http
# 900/tcp open  omginitialrefs

# Nmap done: 1 IP address (1 host up) scanned in 0.90 seconds
```
