## FirewallD status
```bash
sudo systemctl status firewalld
# ● firewalld.service - firewalld - dynamic firewall daemon
#      Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled; preset: enabled)
#      Active: active (running) since Sat 2025-02-08 19:26:44 +03; 41min ago
#        Docs: man:firewalld(1)
#    Main PID: 732 (firewalld)
#       Tasks: 2 (limit: 11132)
#      Memory: 43.9M
#         CPU: 519ms
#      CGroup: /system.slice/firewalld.service
#              └─732 /usr/bin/python3 -s /usr/sbin/firewalld --nofork --nopid

# Feb 08 19:26:44 nfs-1 systemd[1]: Starting firewalld - dynamic firewall daemon...
# Feb 08 19:26:44 nfs-1 systemd[1]: Started firewalld - dynamic firewall daemon.
```


## open a specific port 
```bash
sudo firewall-cmd --zone=public --permanent --add-port=80/tcp
sudo firewall-cmd --zone=public --permanent --add-port=5432/tcp
sudo firewall-cmd --zone=public --permanent --add-port=8000/tcp
# success

sudo firewall-cmd --zone=public --permanent --add-service=postgresql
# success
```


## Reload
```bash
sudo firewall-cmd --reload
# success
```


## list all
```bash
sudo firewall-cmd --list-all
# public (active)
#   target: default
#   icmp-block-inversion: no
#   interfaces: enp1s0
#   sources: 
#   services: cockpit dhcpv6-client mountd nfs nfs3 rpc-bind ssh
#   ports: 8000/tcp
#   protocols: 
#   forward: yes
#   masquerade: no
#   forward-ports: 
#   source-ports: 
#   icmp-blocks: 
#   rich rules: 


sudo firewall-cmd --list-all
# public (active)
#   ...
#   services: cockpit dhcpv6-client mountd nfs nfs3 postgresql rpc-bind ssh
#   ports: 8000/tcp 80/tcp 5432/tcp
#   ...
```
