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


## list iptables
```bash
iptables -L
# Permission denied (you must be root)


sudo iptables -L
# Chain INPUT (policy ACCEPT)
# target        prot       opt    source    destination         

# Chain FORWARD (policy ACCEPT)
# target        prot       opt    source    destination         

# Chain OUTPUT (policy ACCEPT)
# target        prot       opt    source    destination         
```
