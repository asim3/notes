[SSH Audit](ssh-audit.com)


## edit sshd
```bash
sudo nano /etc/ssh/sshd_config

# restart sshd
sudo systemctl restart sshd
```


## best
```bash
Port 2222
PasswordAuthentication no
PermitEmptyPasswords no
PermitRootLogin no
UsePAM no
```


## Disable Passwords
```bash
# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication no
PermitEmptyPasswords no
```


## PM
```bash
# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the KbdInteractiveAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via KbdInteractiveAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and KbdInteractiveAuthentication to 'no'.
UsePAM no
```


## Disallow Root Login
```bash
PermitRootLogin no
```


## Change Port
[List of TCP ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
```bash
Port 2222
```
