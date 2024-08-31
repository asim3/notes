## Ubuntu net conf
`cat /etc/netplan/01-network-manager-all.yaml`
```yml
# Let NetworkManager manage all devices on this system
network:
  version: 2
  renderer: NetworkManager
```
> Ubuntu 17.10 switched from ifupdown (which uses the `/etc/network/interfaces`
  file) to netplan. You can find configuration examples and documentation 
  on https://netplan.io.
