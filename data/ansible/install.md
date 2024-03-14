[modules](https://docs.ansible.com/ansible/latest/modules/modules_by_category.html)


## installing ansible
```bash
sudo apt install -y pipx        #For Ubuntu, Debian, Linux Mint
sudo dnf install -y pipx        #For RHEL, Fedora, AlmaLinux
sudo pacman -S python-pipx      #For Arch, Manjaro, EndeavorOS

pipx ensurepath

# OR
python3 -m pip install --user pipx
python3 -m pipx ensurepath
pipx install --include-deps ansible

ansible --version
ansible-community --version
ansible-playbook --version
ansible-galaxy --version

pipx list
```


## install from galaxy
```bash
ansible-galaxy collection install ansible.posix
ansible-galaxy collection install community.docker
ansible-galaxy collection install community.general
```


## inventory
```bash
sudo mkdir /etc/ansible
sudo nano /etc/ansible/hosts
# 192.168.100.147   ansible_user=asim_username
# 192.168.100.148   ansible_user=asim_username
```


## test connection
```bash
ansible -m ping all
```


## execute
execute shell commands "ad-hoc commands"
```bash
ansible -m shell -a 'hostname' all
ansible -m shell -a 'whoami' all
```

## become sudo
```bash
ansible -m shell -b -a 'whoami' all 
# Missing sudo password

ansible -m shell -b -K -a 'whoami' all
# root
```
