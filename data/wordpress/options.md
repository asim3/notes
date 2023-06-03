# Options
```bash
wp option list

wp option get siteurl
# http://127.0.0.1

wp option get home
# http://127.0.0.1

wp option get blogname
# User&#039;s Blog!

wp option get blogdescription
# Just another WordPress site

wp option get admin_email
# user@example.com
```


## set
```bash
wp option set admin_email oooooo
# Success: Value passed for 'admin_email' option is unchanged.

wp option set admin_email oooooo@bbb.co
# sh: 1: /usr/sbin/sendmail: not found
# Success: Updated 'admin_email' option.

wp option get admin_email
# oooooo@bbb.co
```


## language
```bash
wp option get WPLANG

wp option update WPLANG "ar"

wp option update WPLANG ""      # United States
wp option update WPLANG "en_GB" # United kingdom
wp option update WPLANG "en_AU" # Australia
```


## timezone
```bash
wp option get timezone_string
wp option get gmt_offset

wp option update timezone_string "Asia/Riyadh"
wp option update gmt_offset "3"
```


## time
```bash
wp option get date_format
wp option get time_format
wp option get start_of_week

wp option update date_format "Y-m-d"
wp option update time_format "g:i A"
wp option update start_of_week 0
```
