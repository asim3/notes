[Builtin](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html)
[community](https://docs.ansible.com/ansible/latest/collections/community/index.html)


```txt
│
├── environments
│   ├── production
│   │   ├── group_vars
│   │   │   └── all
│   │   └── main
│   └── staging
│       ├── group_vars
│       │   └── all
│       └── main
├── roles
│   ├── install-docker
│   │   └── tasks
│   │       └── main.yml
│   └── setup-host-server
│       ├── files
│       │   └── my.configuration
│       └── tasks
│           └── main.yml
└── setup.yml
```


### `setup.yml`
```yaml
- name: Setup Swarm Cluster
  hosts:
    - swarm_leader
    - swarm_managers
  user: root
  roles:
    - install-docker
    - test-nfs
    - setup-swarm
```


### `environments/staging/main`
```
[swarm_leader]
my-swarm-1  ansible_host=10.0.0.1   ansible_port=22   ansible_ssh_user=ansible

[swarm_managers]
my-swarm-2  ansible_host=10.0.0.2   ansible_port=22   ansible_ssh_user=ansible
my-swarm-3  ansible_host=10.0.0.3   ansible_port=22   ansible_ssh_user=ansible
my-swarm-4  ansible_host=10.0.0.4   ansible_port=22   ansible_ssh_user=ansible
```


### `environments/staging/group_vars/all`
```yaml
# Host Server
required_processor_count: 2
required_memtotal_mb: 4000


# HashiCorp’s vault
# https://hub.docker.com/r/hashicorp/vault
# https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-intro
secrets:
  secret_aaa: aaa
  secret_ddd: bbb
  secret_ccc: ccc
```


### `roles/install-docker/tasks/main.yml`
```yaml
- name: Include tasks base on OS family
  include_tasks: "{{ ansible_facts['os_family']|lower }}.yml"

- name: Install requirements to run ansible docker plugin
  ansible.builtin.pip:
    name:
      - docker==6.1.3
      - backports.ssl_match_hostname==3.7.0.1
      - paramiko==3.2.0
      - pyOpenSSL==23.2.0
      - requests==2.31.0
      - jsondiff==2.0.0
```
