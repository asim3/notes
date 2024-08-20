## setting up AlmaLinux
```bash
sudo yum install -y gnome-tweaks curl git

# open   tweaks   > appearance > themes   > applications > Adwaita-dark
# open   tweaks   > appearance > themes   > cursor       > DMZ-White
# open   tweaks   > appearance > themes   > icons        > Moka
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
