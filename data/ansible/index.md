[modules](https://docs.ansible.com/ansible/latest/modules/modules_by_category.html)


## Configuration


## installing ansible
```bash
sudo add-apt-repository ppa:ansible/ansible -y \
    && sudo apt-get update \
    && sudo apt install -y ansible

ansible --version
```


## configurations
```bash
sudo adduser admin_ansible
sudo chown -R admin_ansible:admin_ansible /etc/ansible
sudo apt upgrade python python3 aptitude
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

