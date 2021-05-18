# WordPress
Manage WordPress through the command-line.


## Theme status
```bash
wp theme status __theme__

wp theme activate __theme__
wp theme disable  __theme__ [--network]
wp theme enable   __theme__ [--network] [--activate]


wp theme update __theme__ --all --dry-run
wp theme delete __theme__ --all --force
```


## Theme install
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


## info
```bash
wp cli info

wp cli check-update
# Success: WP-CLI is at the latest version.
```


## options
```bash
wp option list
```


## package
```bash
wp package list
```


## plugin
```bash
wp plugin list

# +--------------------------------+----------+-----------+---------+
# | name                           | status   | update    | version |
# +--------------------------------+----------+-----------+---------+
# | akismet                        | inactive | none      | 4.1.9   |
# | all-in-one-wp-migration        | inactive | none      | 7.43    |
# | all-in-one-seo-pack            | inactive | none      | 4.1.0.2 |
# | amp                            | inactive | available | 2.1.1   |
# | amazon-polly                   | inactive | none      | 4.3.1   |
# | google-analytics-for-wordpress | inactive | none      | 7.17.0  |
# | hello                          | inactive | none      | 1.7.2   |
# | jetpack                        | inactive | none      | 9.7     |
# | simple-tags                    | inactive | available | 2.5.7   |
# | w3-total-cache                 | inactive | none      | 2.1.2   |
# | wp-mail-smtp                   | inactive | none      | 2.8.0   |
# +--------------------------------+----------+-----------+---------+
```

## post
```bash
wp post list

# +----+--------------+-------------+---------------------+-------------+
# | ID | post_title   | post_name   | post_date           | post_status |
# +----+--------------+-------------+---------------------+-------------+
# | 1  | Hello world! | hello-world | 2021-05-18 08:43:54 | publish     |
# +----+--------------+-------------+---------------------+-------------+
```


## user
```bash
wp user list

# +----+------------+--------------+------------------+---------------------+---------------+
# | ID | user_login | display_name | user_email       | user_registered     | roles         |
# +----+------------+--------------+------------------+---------------------+---------------+
# | 1  | user       | user         | user@example.com | 2021-05-18 08:43:53 | administrator |
# +----+------------+--------------+------------------+---------------------+---------------+
```


## menu
```bash
wp menu list
```


## sidebar
```bash
wp sidebar list
# +------------------+---------------------+----------------------------------------------------------------------------+
# | name             | id                  | description                                                                |
# +------------------+---------------------+----------------------------------------------------------------------------+
# | Footer           | sidebar-1           | Add widgets here to appear in your footer.                                 |
# | Inactive Widgets | wp_inactive_widgets | Drag widgets here to remove them from the sidebar but keep their settings. |
# +------------------+---------------------+----------------------------------------------------------------------------+
```


## widget
```bash
widget
```


## static
```bash
wp media     

wp media fix-orientation [<attachment-id>...] [--dry-run]

wp media image-size [--fields=<fields>] [--format=<format>]

wp media import <file>... [--post_id=<post_id>] [--title=<title>] [--caption=<caption>] [--alt=<alt_text>] [--desc=<description>] [--skip-copy] [--preserve-filetime] [--featured_image] [--porcelain]

wp media regenerate [<attachment-id>...] [--image_size=<image_size>] [--skip-delete] [--only-missing] [--yes]
```


## comment
```bash
wp comment list
```


## database
```bash
wp db cli


wp db import [<file>] \
  [--dbuser=<value>] \
  [--dbpass=<value>] \
  [--<field>=<value>] \
  [--skip-optimization]


wp db export [<file>] \
  [--dbuser=<value>] \
  [--dbpass=<value>] \
  [--<field>=<value>] \
  [--tables=<tables>] \
  [--exclude_tables=<tables>] \
  [--porcelain]
```


## config
```bash
wp config list
# +---------------------+------------------------------------------------------------------+----------+
# | name                | value                                                            | type     |
# +---------------------+------------------------------------------------------------------+----------+
# | table_prefix        | wp_                                                              | variable |
# | DB_NAME             | bitnami_wordpress                                                | constant |
# | DB_USER             | bn_wordpress                                                     | constant |
# | DB_PASSWORD         |                                                                  | constant |
# | DB_HOST             | mariadb:3306                                                     | constant |
# | DB_CHARSET          | utf8                                                             | constant |
# | DB_COLLATE          |                                                                  | constant |
# | AUTH_KEY            | `FPf^WXoFy*Ozkk7:h*9D%hVN1OO7ot+clreG@u9o0_(X)zzD1n^:(rmq40{MRu( | constant |
# | SECURE_AUTH_KEY     | HXJw!Nkrli)>! KCorG{i/1AX|s+}|;Iftcjj88[VAS0RW`hq>q~IvYP]~^GXyZJ | constant |
# | LOGGED_IN_KEY       | )}o^B)3|g1Fm-$q[4:A$nii](H}1%`?kJHyVCZ8Jd<Kg9,Bfru&0Vl| Ux9G}G1> | constant |
# | NONCE_KEY           | ^s}_odeT^`9W13*%ih<WmE9fm79+tqW6TQ.v84gdD!<3~A`Ci-xx=*3W_1oP7KW% | constant |
# | AUTH_SALT           | ,v.vG<`/g=}W#mc->vVA&glI@y(]h?dNAs:?r+~&cTkvs}C#Se0b=h:z+$<Vp3AF | constant |
# | SECURE_AUTH_SALT    | u=Y2B_WN?Y1HWeAH~_w3-TbyGn_W2T#|WT e>VO5V=Zgt%z3y2j9N@.:V#9jPU5R | constant |
# | LOGGED_IN_SALT      | (b5Zv|1Y93q8CzC<a6&h|@&O ^b6O!SB:*khmu#tz7_F`AC1jwi)#<k(%W4jdcxX | constant |
# | NONCE_SALT          | 04_~752}z.Hu<VKNO).ndbJo.k~d>gY412Y7T{+IPcL.=]-F$$C-[bE:cLV(&y[[ | constant |
# | WP_DEBUG            |                                                                  | constant |
# | FS_METHOD           | direct                                                           | constant |
# | WP_HOME             | http://127.0.0.1/                                                | constant |
# | WP_SITEURL          | http://127.0.0.1/                                                | constant |
# | WP_AUTO_UPDATE_CORE |                                                                  | constant |
# +---------------------+------------------------------------------------------------------+----------+
```


## i18n
```bash
#   i18n                  Provides internationalization tools for WordPress projects.
#   import                Imports content from a given WXR file.
#   language              Installs, activates, and manages language packs.
```
