## install
```bash
sudo apt purge ufw

sudo apt install iptables

sudo iptables --flush
```


## list iptables
```bash
sudo iptables -L
# Chain INPUT (policy ACCEPT)
# target     prot     opt     source     destination

# Chain FORWARD (policy ACCEPT)
# target     prot     opt     source     destination

# Chain OUTPUT (policy ACCEPT)
# target     prot     opt     source     destination


sudo iptables -L --line-number
```


# firewall
## set default policy
```bash
sudo iptables --policy INPUT ACCEPT
sudo iptables --policy INPUT DROP
```


## insert to a chain
```bash
# --insert to the top of the chain
sudo iptables -I       INPUT --source 192.168.100.0/24   --jump DROP
sudo iptables -I       INPUT --source 192.168.122.173/32 --jump ACCEPT
sudo iptables --insert INPUT --source 192.168.122.173/32 --jump REJECT


# --append to the bottom of the chain
sudo iptables -A       INPUT --source 192.168.55.0/24 --jump ACCEPT
sudo iptables -A       INPUT --source 192.168.55.0/24 --jump DROP
sudo iptables --append INPUT --source 192.168.55.0/24 --jump REJECT
```


## delete a role
```bash
sudo iptables -L --line-number

sudo iptables --delete INPUT 1
```


## ports
```bash
# --insert to the top of the chain
sudo iptables --insert INPUT -p tcp --dport 800 --jump ACCEPT
sudo iptables --insert INPUT -p tcp --dport 800 --jump DROP
sudo iptables --insert INPUT -p udp --dport 800 --jump REJECT


sudo iptables --insert INPUT -p tcp --dport 22 --source 192.168.55.0/24 --jump ACCEPT
sudo iptables --insert INPUT -p tcp --dport 22 --source 192.168.55.0/24 --jump DROP
sudo iptables --insert INPUT -p tcp --dport 22 --source 192.168.122.173/32 --jump REJECT
```


## Save
```bash
# Automatic iptables rules loading
sudo apt install iptables-persistent


sudo -i

# Debian/Ubuntu: 
iptables-save  > /etc/iptables/rules.v4
ip6tables-save > /etc/iptables/rules.v6

# RHEL/CentOS: 
iptables-save  > /etc/sysconfig/iptables
ip6tables-save > /etc/sysconfig/ip6tables
```


## restore
```bash
# Debian/Ubuntu: 
sudo iptables-restore < /etc/iptables/rules.v4

# RHEL/CentOS: 
sudo iptables-restore < /etc/sysconfig/iptables
```


## IP Tables
- Filter Table `firewall`
  - input chain
  - output chain
  - forward chain
- NAT Table `load balancer`
  - output chain
  - prerouting chain
  - postrouting chain
- Mangle Table `modify connection packets`
  - input chain
  - output chain
  - forward chain
  - prerouting chain
  - postrouting chain


## essentials
[docs](https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands#allowing-established-and-related-incoming-connections)
```bash
sudo -i

iptables -F
iptables -vnL

# Loopback Connections
iptables --insert INPUT --jump ACCEPT -i lo

# allow return traffic for outgoing connections initiated by the server itself
iptables --insert INPUT --jump ACCEPT --match conntrack --ctstate ESTABLISHED,RELATED

# Dropping Invalid Packets
iptables --insert INPUT --jump DROP --match conntrack --ctstate INVALID

# ICMP ping request
iptables --insert INPUT --jump ACCEPT -p icmp

# Open Ports
iptables --insert INPUT --jump ACCEPT -p tcp --dport 8000:9000
iptables --insert INPUT --jump ACCEPT -p tcp --dport 443
iptables --insert INPUT --jump ACCEPT -p tcp --dport 80 

# Open SSH Ports
iptables --insert INPUT --jump ACCEPT -p tcp --dport 22 --match conntrack --ctstate NEW,ESTABLISHED

# Docker
iptables --insert INPUT --jump ACCEPT -p tcp --dport 2376 --source 192.168.55.0/24
iptables --insert INPUT --jump ACCEPT -p tcp --dport 2377 --source 192.168.55.0/24
iptables --insert INPUT --jump ACCEPT -p tcp --dport 7946 --source 192.168.55.0/24
iptables --insert INPUT --jump ACCEPT -p udp --dport 7946 --source 192.168.55.0/24
iptables --insert INPUT --jump ACCEPT -p udp --dport 4789 --source 192.168.55.0/24

# Log
iptables --append INPUT --jump LOG

# policy
iptables --policy INPUT DROP

# Save
iptables-save  > /etc/iptables/rules.v4



# V6
ip6tables -vnL

ip6tables --policy INPUT DROP
ip6tables --policy FORWARD DROP
ip6tables --policy OUTPUT DROP
ip6tables-save  > /etc/iptables/rules.v6
```


## Logs
```bash
iptables --append INPUT --jump LOG -p icmp
iptables --append INPUT --jump LOG -p tcp --dport 22 --match conntrack --ctstate NEW
iptables --append INPUT --jump LOG                   --match conntrack --ctstate INVALID
iptables --append INPUT --jump LOG


journalctl | grep 'PROTO=ICMP'
journalctl -f
journalctl -f --dmesg
```


## best
```bash
sudo -i
iptables -F
iptables --append INPUT --jump ACCEPT -i lo
iptables --append INPUT --jump ACCEPT -p tcp --dport 443
iptables --append INPUT --jump ACCEPT -p tcp --dport 80
iptables --append INPUT --jump ACCEPT --source 192.168.55.0/24
iptables --append INPUT --jump LOG    -p icmp
iptables --append INPUT --jump REJECT -p icmp
iptables --append INPUT --jump LOG    -p tcp --dport 22 --match conntrack --ctstate NEW
iptables --append INPUT --jump ACCEPT -p tcp --dport 22 --match conntrack --ctstate NEW,ESTABLISHED
iptables --append INPUT --jump ACCEPT --match conntrack --ctstate ESTABLISHED,RELATED
iptables --append INPUT --jump LOG    --match conntrack --ctstate INVALID
iptables --append INPUT --jump REJECT
iptables --append INPUT --jump LOG
iptables --policy INPUT DROP
```
