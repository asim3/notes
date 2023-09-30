[port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)


## scan for IP addresses
```bash
nmap -sP 192.168.1.0/24
# Nmap scan report for 192.168.1.1
# Host is up (0.040s latency).
# Nmap scan report for 192.168.1.2
# Host is up (0.060s latency).
# Nmap scan report for 192.168.1.3
# Host is up (0.045s latency).


# show ip and open ports
sudo nmap -sT -O 192.168.1.0/24 > nmap_output
# this command can take some time
```


## scan IP address ports
```bash
nmap 10.10.11.143
# PORT     STATE    SERVICE
# 22/tcp   open     ssh
# 80/tcp   open     http
# 443/tcp  open     https
# 5033/tcp filtered jtnetd-server


nmap -sC -sV 10.10.11.148

# -oA <basename>: Output in the three major formats at once
nmap -sC -sV -oA ./nmap-result 10.10.11.148
```


## scan local open ports
```bash
sudo nmap -n -PN -sT -sU -p- localhost

# OR

sudo netstat -ltup 

# -l tells netstat to print all listening sockets
# -t shows all TCP connections
# -u displays all UDP connections
# -p enables printing of application/program name listening on the port
```


## list open files
```bash
sudo lsof -i
# COMMAND    PID            USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
# systemd-r  122 systemd-resolve    4u  IPv4     64      0t0  UDP localhost:domain 
# firefox   1108            asim    1u  IPv4     45      0t0  TCP aaaa (ESTABLISHED)
```
