# Data Build Tool (dbt)


# MySQL setup
[MySQL setup](https://docs.getdbt.com/docs/core/connect-data-platform/mysql-setup)
[Oracle setup](https://docs.getdbt.com/docs/core/connect-data-platform/oracle-setup)


## install the adapter
```bash
python -m pip install dbt-core dbt-mysql
python -m pip install dbt-core dbt-oracle
```


## connection
`nano /home/asim/.dbt/profiles.yml`
```yml
your_profile_name:
  target: dev
  outputs:
    dev:
      type: mysql
      server: localhost
      port: 3306
      schema: analytics
      username: your_mysql_username
      password: your_mysql_password
      ssl_disabled: True
```
