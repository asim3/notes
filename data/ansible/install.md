[modules](https://docs.ansible.com/ansible/latest/modules/modules_by_category.html)


## installing ansible
```bash
sudo apt install -y pipx
sudo PIPX_HOME=/opt/pipx  PIPX_BIN_DIR=/usr/local/bin   pipx install ansible-core


ansible --version
ansible-community --version
ansible-playbook --version
ansible-galaxy --version
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
