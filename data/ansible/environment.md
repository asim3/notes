## setup
```bash
mkdir -p ./environment/testing/group_vars
mkdir -p ./files
mkdir -p ./playbooks


cat <<-EOF > ./environment/testing/inventory
[my_admin_server]
192.168.1.104
EOF


cat <<-EOF > ./environment/testing/group_vars/all
my_var_1: my var 1 @ group_vars
my_var_2: my var 2 @ group_vars
EOF


cat <<-EOF > ./files/my-file.txt
echo my name is $(whoami)
EOF
```


## playbooks
`nano ./playbooks/my-playbook.yaml`
```yaml
- name: Echo My Text
  hosts: my_admin_server
  become: yes
  become_user: asim

  vars:
    my_env_var_1: my test 1
    my_env_var_2: my test 2

  vars_prompt:
    - name: my_var_username
      prompt: Your username
      private: no

    - name: my_var_password
      prompt: Your password
      private: yes

  tasks:
    - name: add new file
      copy:
        content: echo {{ my_env_var_2 }}
        dest: /tmp/my-script.sh
        mode: 0755

    - name: copy file to '/tmp/my-shell.sh'.
      copy:
        src: ./files/my-file.txt
        dest: /tmp/my-shell.sh

    - name: Execute script
      ansible.builtin.shell: /tmp/my-script.sh >> /tmp/my-script.txt

    - name: Execute shell
      ansible.builtin.shell: env >> /tmp/my-shell.sh
```


## run
```bash
ansible-playbook ./playbooks/my-playbook.yaml -i ./environment/testing -K 
```
