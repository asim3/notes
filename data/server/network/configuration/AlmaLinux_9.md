## AlmaLinux 9
`man nm-settings` and `man nm-settings-keyfile`
```bash
# info
nmcli
# OR
nmcli device
nmcli device show
nmcli connection show
nmcli general


# NetworkManager's connections
sudo nmcli connection reload
sudo nmcli connection up enp1s0


# monitor NetworkManager changes
nmcli monitor


ls -l /usr/lib/NetworkManager/system-connections/
# total 0

ls -l /run/NetworkManager/system-connections/
# total 4
# -rw-------. 1 root root 314 Aug 31 19:06 lo.nmconnection

ls -l /etc/NetworkManager/system-connections/
# total 8
# -rw-------. 1 root root 229 Aug 31 19:02 enp8s0.nmconnection
# -rw-------. 1 root root 229 Aug 31 19:02 enp9s0.nmconnection
```


## AlmaLinux 9: profile
`cat /etc/NetworkManager/system-connections/enp8s0.nmconnection`
```ini
[connection]
id=enp8s0
uuid=b8112a63-d06e-35a1-8863-50f0d553a8e5
type=ethernet
autoconnect-priority=-999
interface-name=enp8s0
timestamp=1725116717

[ethernet]

[ipv4]
method=auto
method=manual
never-default=no
may-fail=yes

[ipv6]
addr-gen-mode=eui64
method=auto

[proxy]
```


## test net
```bash
route -n

# test GATEWAY
ping 192.168.122.1
ping 192.168.137.1

# test self
ping 192.168.122.111
ping 192.168.137.123
```
