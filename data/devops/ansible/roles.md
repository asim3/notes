```txt
mkdir -p ./roles/my-first-role/tasks
nano     ./roles/my-first-role/tasks/main.yml
```


```yaml
- name: "Installing VIM"
  apt: name="vim" state=present

- name: "Installing GIT"
  apt:
   name="git"
   state=latest

- name: "copy from local to remote"
  copy:
   src=~/my-local.txt
   dest=/var/my-remote-server.txt
   owner=root
   group=root
   mode=0644
```


 
`nano ./my-first-playbook.yml`
```yaml
---
- hosts: all
  become: true
  roles:
  - my-first-role
```


```plaintext
ansible-playbook -K ./my-first-playbook.yml 
```
