# Theme

## status
```bash
wp theme status __theme__
```


## install
```bash
wp theme install <theme|zip|url> --activate --version=1.23

wp theme search

wp theme list
# +-----------------+----------+--------+---------+
# | name            | status   | update | version |
# +-----------------+----------+--------+---------+
# | twentynineteen  | inactive | none   | 2.0     |
# | twentytwenty    | inactive | none   | 1.7     |
# | twentytwentyone | active   | none   | 1.3     |
# +-----------------+----------+--------+---------+
```


## enable
```bash
wp theme activate __theme__

wp theme enable   __theme__ [--network] [--activate]

wp theme disable  __theme__ [--network]

wp theme delete __theme__ --all --force
```


## update
```bash
wp theme update __theme__ --all --dry-run
```
