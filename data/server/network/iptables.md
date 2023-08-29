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


## run me
[docs](https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands#allowing-established-and-related-incoming-connections)
```bash
sudo -i

iptables -F
iptables -L

# Loopback Connections
# iptables --insert INPUT -i lo --jump ACCEPT

# Established and Related Incoming Connections
# iptables --insert INPUT --match conntrack --ctstate ESTABLISHED,RELATED --jump ACCEPT

# Dropping Invalid Packets
iptables --insert INPUT --match conntrack --ctstate INVALID --jump DROP

# ICMP ping request
iptables --insert INPUT -p icmp --jump ACCEPT

# Open Ports
iptables --insert INPUT -p tcp --dport 8000 --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p tcp --dport 443  --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p tcp --dport 80   --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p tcp --dport 22   --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p tcp --dport 22   --match conntrack --ctstate     ESTABLISHED --jump ACCEPT

# Docker
iptables --insert INPUT -p tcp --dport 2376 --source 10.0.0.0/24 --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p tcp --dport 2377 --source 10.0.0.0/24 --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p tcp --dport 7946 --source 10.0.0.0/24 --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p udp --dport 7946 --source 10.0.0.0/24 --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT
iptables --insert INPUT -p udp --dport 4789 --source 10.0.0.0/24 --match conntrack --ctstate NEW,ESTABLISHED --jump ACCEPT

# policy
iptables --policy INPUT DROP

# Save
iptables-save  > /etc/iptables/rules.v4



# V6
ip6tables -L

ip6tables --policy INPUT DROP
ip6tables --policy FORWARD DROP
ip6tables --policy OUTPUT DROP
ip6tables-save  > /etc/iptables/rules.v6
```
