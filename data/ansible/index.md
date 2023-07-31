## Copy a file template
```yaml
- name: Copy My File
  become: yes
  become_user: root
  ansible.builtin.template:
    src: ../files/my-template.txt.j2
    dest: /home/asim/my-template.txt
    owner: asim
    group: asim
    mode: '0751' # rwxr-x--x
```


## `cp ___  ___`
```yaml
- name: Copy a file
  become: yes
  become_user: root
  ansible.builtin.copy:
    src: ../files/my-file.txt
    dest: /home/asim/my-file.txt
    owner: asim
    group: asim
    mode: '0644' # rw-r--r--
    backup: true
```


## `mkdir ___`
```yaml
- name: Add a Configuration Directory
  become: yes
  become_user: root
  ansible.builtin.file:
    path: /etc/my-conf.d
    state: directory
    owner: root
    group: root
    mode: '0755'
```


## `apt install ___`
```yaml
- name: Update apt and install docker
  become: yes
  become_user: root
  ansible.builtin.apt:
    name:
      - docker-ce
      - docker-ce-cli
      - containerd.io
      - python3-pip
    state: latest
    update_cache: true
```


## `yum install ___`
```yaml
- name: Update apt and install docker
  become: yes
  become_user: root
  ansible.builtin.yum:
    name:
      - docker-ce
      - docker-ce-cli
      - containerd.io
      - python3-pip
    state: latest
    update_cache: true
```


## User
```yaml
- name: Setup Ansible User
  become: yes
  become_user: root
  ansible.builtin.user:
    name: ansible
    comment: Ansible Automation
    shell: /bin/bash
    groups: sudo
    append: yes
    password_lock: true
```


## Group
```yaml
- name: Ensure Docker group exists
  become: yes
  become_user: root
  ansible.builtin.group:
    name: docker
    gid: 1003
    state: present
```


## `systemctl start ___`
```yaml
- name: Start Docker
  become: yes
  become_user: root
  ansible.builtin.service:
    name: "docker"
    enabled: true
    state: started
    # state: restarted
#   when: my_file.changed
```


## os_family
```yaml
- name: Include tasks base on OS family
  include_tasks: "{{ ansible_facts['os_family']|lower }}.yml"
```


## assert
```yaml
- name: Assert Initial Setup
  ansible.builtin.assert:
    that:
      - ansible_version.major == 2
      - ansible_playbook_python == "/usr/bin/python3"

- name: Assert Processor Count And Memory Size
  ansible.builtin.assert:
    that:
      - ansible_processor_count >= {{ required_processor_count }}
      - ansible_memtotal_mb >= {{ required_memtotal_mb }}
```
