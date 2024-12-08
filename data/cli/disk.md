## Disk Info
```bash
df -h

# only include filesystems of a particular type
df -ht ext4

# list all drives
lsblk

# directory size
du -sh my_directory/
```


## Dir Size
```bash
sudo du -sh /home/*
# 28K	    /home/asim
# 2.7G	    /home/aaa
# 192K	    /home/bbb
# 3.2G	    /home/ccc
# 3.2G	    /home/ddd
```


## ISO Bootable USB
```txt
lsblk
df -h

usb-creator-gtk
```


## partition managers
```bash
sudo fdisk /dev/sda

# OR graphical
sudo apt install gparted

# GNOME Disks a.k.a (GNOME Disks Utility)
sudo apt install gnome-disk-utility
```


## iso to usb
```bash
sudo apt install gddrescue

ddrescue -V

sudo ddrescue path/to/my.iso /dev/sdx --force -D

lsblk | grep sd

sudo ddrescue ./Downloads/iso/debian-live-10.7.0-amd64-gnome.iso /dev/sdb1
```


## edit a drive
```txt
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
lsblk | grep sd

sudo mount /dev/sdb1 /my-new-dev/
```


# Format
> WARNING: Format the new partition using Ext4
```bash
# list block devices
lsblk

sudo mkfs.ext4 /dev/sdb1
```


## LVM Logical Volume
```bash
sudo pvdisplay
sudo lvdisplay

sudo vgs
#   VG        #PV #LV #SN Attr   VSize   VFree
#   ubuntu-vg   1   1   0 wz--n- <23.00g    0

ll /dev/sdb*
# brw-rw---- 1 root disk 8, 16 Dec 14 12:10 /dev/sdb
# brw-rw---- 1 root disk 8, 17 Dec 14 12:10 /dev/sdb1

sudo pvcreate /dev/sdb1
#   Physical volume "/dev/sdb1" successfully created.

sudo vgcreate vg-data /dev/sdb1
#   Volume group "vg-data" successfully created

sudo vgs
#   VG        #PV #LV #SN Attr   VSize    VFree
#   ubuntu-vg   1   1   0 wz--n-  <23.00g       0
#   vg-data     1   0   0 wz--n- <100.00g <100.00g

sudo lvcreate --name lv-data -l 100%FREE vg-data

# make a filesystem: format this new LV
sudo mkfs.xfs /dev/vg-data/lv-data
```


## LVM copy /var
```bash
sudo mkdir /var.new
sudo mount /dev/vg-data/lv-data /var.new

sudo cp -R  /var/* /var.new
sudo du -sh /var /var.new

sudo umount /dev/mapper/vg--data-lv--data
sudo rm -r /var.new

sudo mount /dev/vg-data/lv-data /var
```


## Permanently mount LVM
```bash
sudo nano /etc/fstab
# By Asim
# /dev/mapper/vg--data-lv--data   /var   xfs   defaults 0 0
```
