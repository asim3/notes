`nano nginx-install-playbook.yml`
```yaml
---
- name: "install nginx"
  hosts: all
  become: true

  tasks:
  - name: Update apt-get repo and cache
    apt: update_cache=yes force_apt_get=yes cache_valid_time=3600

  - name: install nginx
    apt: name=nginx state=present

  # systemd services: start on boot
  - name: start nginx
    service:
      name: nginx
      enabled: yes
```



```txt
ansible-playbook -K ./nginx-install-playbook.yml --check
ansible-playbook -K ./nginx-install-playbook.yml 
```
