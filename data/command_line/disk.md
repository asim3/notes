## ISO Bootable USB
```txt
usb-creator-gtk
```


# Format
Format the new partition using Ext4
```bash
# list block devices
lsblk

sudo mkfs.ext4 /dev/sdb1
```


## partition managers
```bash
sudo fdisk /dev/sda

# OR graphical
sudo apt install gparted

# GNOME Disks a.k.a (GNOME Disks Utility)
sudo apt install gnome-disk-utility
```


## edit a drive
```txt
lsblk
df -h

# unmount a drive
sync
sudo umount /dev/sdb1

# edit
sudo fdisk /dev/sdb
   i   print information about a partition
   d   delete a partition
   F   list free unpartitioned space
   n   add a new partition
       p   primary (0 primary, 0 extended, 4 free)
       1   partition number
           enter for default
           enter for default
           
   t   change a partition type
       83  for Linux

   p   print the partition table
   w   write table to disk and exit
```


## Mount a new drive
```txt
sudo mkdir /my-new-dev/
sudo mount /dev/sdb1 /my-new-dev/

df -H
lsblk
```
