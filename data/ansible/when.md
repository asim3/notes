## If Failed
```yaml
- name: Add docker signing key from url
  become: yes
  become_user: root
  ansible.builtin.rpm_key:
    key: "https://download.docker.com/linux/{{ mydistribution }}/gpg"
    state: present
  retries: 5
  delay: 15
  register: result
  until: not result.failed
```


## When Changed
```yaml
- name: When Changed
  hosts: my_admin_server
  become: yes
  become_user: asim

  tasks:
    - name: Echo ENV
      ansible.builtin.shell: env > /tmp/my-shell.sh
      register: my_env
      # TASK [Echo ENV]
      # changed: [192.168.122.118]

    - name: Print current date
      debug:
        msg: >-
          {{ ansible_date_time }}
          || weekday_number: {{ ansible_date_time.weekday_number }}
          || tz: {{ ansible_date_time.tz }}
          || tz_offset: {{ ansible_date_time.tz_offset }}
          || weekday: {{ ansible_date_time.weekday }}
          || weeknumber: {{ ansible_date_time.weeknumber }}
      when: my_env.changed
      # TASK [Print current date]
      # ok: [192.168.122.118] => {
      #     "msg": "
      #      {
      #        'year': '2024',
      #        'month': '05',
      #        'weekday': 'Friday',
      #        'weekday_number': '5',
      #        'weeknumber': '20',
      #        'day': '17',
      #        'hour': '18',
      #        'minute': '26',
      #        'second': '28',
      #        'epoch': '1715959588',
      #        'epoch_int': '1715959588',
      #        'date': '2024-05-17',
      #        'time': '18:26:28',
      #        'iso8601_micro': '2024-05-17T15:26:28.851568Z',
      #        'iso8601': '2024-05-17T15:26:28Z',
      #        'iso8601_basic': '20240517T182628851568',
      #        'iso8601_basic_short': '20240517T182628',
      #        'tz': '+03',
      #        'tz_dst': '+03',
      #        'tz_offset': '+0300'
      #       }
      #       || weekday_number: 5 || tz: +03 || tz_offset: +0300 || weekday: Friday || weeknumber: 20"
      # }
```


## When today is friday
```yaml
    - name: Print if today is friday
      debug:
        msg: "weekday_number: {{ ansible_date_time.weekday_number }}"
      when: ansible_date_time.weekday_number == "5"
      # TASK [Print if today is friday]
      # ok: [192.168.122.118] => {
      #     "msg": "weekday_number: 5"
      # }
```


## When today is not Saturday
```yaml
    - name: Print if today is not Saturday
      debug:
        msg: "weekday_number: {{ ansible_date_time.weekday_number }}"
      when: ansible_date_time.weekday_number != "6"
      # TASK [Print if today is not Saturday]
      # ok: [192.168.122.118] => {
      #     "msg": "weekday_number: 5"
      # }
```


## When X is defined
```yaml
    - name: Print the gateway for each host when defined
      ansible.builtin.debug:
        msg: System {{ inventory_hostname }} has gateway {{ ansible_default_ipv4.gateway }}
      when: ansible_default_ipv4.gateway is defined
      # TASK [Print the gateway for each host when defined]
      # ok: [192.168.122.118] => {
      #     "msg": "System 192.168.122.118 has gateway 192.168.122.1"
      # }
```
