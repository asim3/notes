## setup RHEL 9 Net
```bash
nmcli

nmcli c reload
nmcli c up enp1s0

curl google.com

reboot
```


## setup Workstation
```bash
sudo yum update
sudo yum group list

sudo yum -y group install 'Workstation'
systemctl set-default graphical.target

reboot
```


## setup AlmaLinux
```bash
sudo yum install -y gnome-tweaks curl git bash-completion


# setup Bash
cat <<EOF | sudo tee -a /etc/profile.d/zz_by_asim.sh
#!/bin/bash


alias uuu='set -x && sudo yum -y clean all && sudo yum -y update && sudo yum -y upgrade && echo Done. && set +x;'

alias ttt='rm -rf /tmp/asim-tmp-file/ 2> /dev/null; mkdir /tmp/asim-tmp-file/ && cd /tmp/asim-tmp-file/'

alias ll='ls -alFh'
alias lll='ls -lhF'

alias grep='grep --color=auto'
EOF
```


## setup yum
```bash
subscription-manager register
# Registering to: subscription.rhsm.redhat.com:443/subscription
# Username: asimm@me.com
# Password:
# The system has been registered with ID: 2dabcf4-123-000-123-0cb49a264e
# The registered system name is: localhost.localdomain


subscription-manager refresh
# All local data refreshed


subscription-manager attach --auto
# Installed Product Current Status:
# Product Name: Red Hat Enterprise Linux Server
# Status:       Subscribed


subscription-manager list --available --all


yum install java
```
