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
```


# firewall
## set default policy
```bash
sudo iptables --policy INPUT ACCEPT
sudo iptables --policy INPUT DROP
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
