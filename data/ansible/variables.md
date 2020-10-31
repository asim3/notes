```yaml
nano ./my_vars.yml
---
my_name: 'root'
my_password: 'asim-1234'
```



`nano var-playbook.yml`
```yaml
---
- name: "copy files"
  hosts: all
  # become: true
  gather_facts: False
  
  vars:
    testing_vars: 'my-test-ansible'
    my_name: 'asim'
    
  vars_files:
    - ./my_vars.yml


  tasks:
  - name: Create a directory if it does not exist
    file:
     path: '~/{{ testing_vars }}'
     state: directory
     mode: '0755'

  - name: add new file
    file:
     path: '~/{{ testing_vars }}/{{ my_name }}.txt'
     state: touch
     mode: '644'

  - name: add new file
    file:
     path: '~/{{ testing_vars }}/{{ my_password }}.json'
     state: touch
     mode: '644'
```



```plaintext
# @ ~/my-test-ansible/
# asim-1234.json
# root.txt
```


```txt
ansible-playbook var-playbook.yml --check
ansible-playbook var-playbook.yml
```
