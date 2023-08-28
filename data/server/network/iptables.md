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


## auto load
Automatic iptables rules loading
```bash
sudo apt-get install iptables-persistent
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
```bash
sudo -i

iptables --insert INPUT --source 192.168.122.0/24 --jump ACCEPT

iptables --policy INPUT DROP

mkdir -p /etc/iptables

iptables-save  > /etc/iptables/rules.v4

iptables -L
```
