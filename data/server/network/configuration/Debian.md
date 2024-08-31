## Debian: Update IPs
(DHCP)
```bash
sudo dhclient -v
# DHCPDISCOVER on enp8s0 to 255.255.255.255 port 67 interval 8
# DHCPDISCOVER on enp1s0 to 255.255.255.255 port 67 interval 4
# DHCPOFFER of 192.168.122.38 from 192.168.122.1
# DHCPREQUEST for 192.168.122.38 on enp1s0 to 255.255.255.255 port 67
# DHCPACK of 192.168.122.38 from 192.168.122.1
# RTNETLINK answers: File exists
# bound to 192.168.122.38 -- renewal in 1610 seconds.
```


## Debian: net conf
```bash
tree /etc/network/
# ├── if-down.d
# │   └── resolved
# ├── if-post-down.d
# ├── if-pre-up.d
# ├── if-up.d
# │   └── resolved
# ├── interfaces
# └── interfaces.d
```


## Debian: net conf
`cat /etc/network/interfaces`
```bash
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug enp1s0
iface enp1s0 inet dhcp
```


## Debian: Setup net conf
`sudo nano /etc/network/interfaces`
```bash
auto enp1s0
iface enp1s0 inet dhcp

# OR

auto enp1s0
iface enp1s0 inet static
  address 192.168.122.222
  netmask 255.255.255.0
  gateway 192.168.122.255

auto enp8s0
iface enp8s0 inet static
  address 192.168.137.222
  netmask 255.255.255.0
  gateway 192.168.137.255
```
