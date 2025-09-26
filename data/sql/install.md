## PostgreSQL (prod)
```bash
sudo apt update
sudo apt upgrade
sudo apt install postgresql


sudo systemctl status postgresql
sudo systemctl restart postgresql
```


## Configure PostgreSQL for Production
Change `listen_addresses = 'localhost'` to `listen_addresses = '*'`
```bash
sudo nano /etc/postgresql/16/main/postgresql.conf
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------
# listen_addresses = '*'          # what IP address(es) to listen on;
```


## Authentication
Edit `pg_hba.conf` to configure client authentication methods.
For production, `scram-sha-256` is recommended for host connections.
```bash
sudo nano /etc/postgresql/16/main/pg_hba.conf
# host    all             all             0.0.0.0/0               scram-sha-256
```


## Create a New Database and User
```bash
sudo -u postgres createuser --interactive
# Enter name of role to add: asim4
# Shall the new role be a superuser? (y/n) n
# Shall the new role be allowed to create databases? (y/n) y
# Shall the new role be allowed to create more new roles? (y/n) y


sudo -u postgres createdb asim4_database -O asim4

systemctl restart postgresql
```


## Create a User Password
`sudo -u postgres psql`
```sql
ALTER USER asim4 WITH PASSWORD 'my_password';
/* ALTER ROLE */
```
