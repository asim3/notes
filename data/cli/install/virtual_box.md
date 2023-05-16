## Gnome Boxes
```bash
sudo apt install gnome-boxes
```

# OR 


## public keys
Import the Oracle public keys
```bash
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
```


## add repository
Add the VirtualBox APT repository to /etc/apt/sources.list.d/
```bash
sudo add-apt-repository "deb [arch=amd64] http://download.virtualbox.org/virtualbox/debian $(lsb_release -cs) contrib"
```


## install virtualbox
```bash
sudo apt update
sudo apt install virtualbox-6.1
```


# OR 

[Downloads](https://www.virtualbox.org/wiki/Linux_Downloads)
```bash
distributor="$(lsb_release -is)~$(lsb_release -cs | sed -e 's/focal/bionic/')"
v_version=$(curl -s https://download.virtualbox.org/virtualbox/LATEST-STABLE.TXT)
b_version=$(echo $v_version | cut -d'.' -f 1,2)
full_name="virtualbox-${b_version}_${v_version}-142142~${distributor}_amd64.deb"


cd /tmp/ \
&& sudo echo 'install Virtual Box' \
&& sudo apt install -y libsdl1.2debian libvpx5 \
&& curl -LO "https://download.virtualbox.org/virtualbox/$v_version/$full_name"

curl -LO "https://download.virtualbox.org/virtualbox/$v_version/SHA256SUMS" \
&& sha256sum -c --ignore-missing SHA256SUMS

sudo apt install ./$full_name \
&& echo Done.
```
