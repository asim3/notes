# menu
```bash
wp menu list

# +---------+--------------+--------------+-----------+-------+
# | term_id | name         | slug         | locations | count |
# +---------+--------------+--------------+-----------+-------+
# | 16      | my_test_menu | my_test_menu | main_menu | 2     |
# +---------+--------------+--------------+-----------+-------+
```


# list
```bash
wp menu item list 16
wp menu item list my_test_menu

# +-------+-----------+----------+------------------------------+----------+
# | db_id | type      | title    | link                         | position |
# +-------+-----------+----------+------------------------------+----------+
# | 13    | custom    | الرئيسية | http://192.168.99.100:31181  | 1        |
# | 14    | post_type | حسابي    | http://127.0.0.1/my-account/ | 2        |
# +-------+-----------+----------+------------------------------+----------+
```


# add custom url
```bash
wp menu item add-custom my_test_menu "Apple Site" http://apple.com


# Delete
wp menu item delete 17
```


# add post url
```bash
wp menu item add-post my_test_menu __post_id__ --title="My Test Navigation Label"


# Delete
wp menu item delete 17
```


# update 
```bash
wp menu item update 13 --title="الرئيسية"
wp menu item update 14 --title="حسابي"


wp menu item update __id__
    --title="__title__"
    --link="__link__"
    --description="__description__"
    --attr-title="__attr-title__"
    --target="__target__"
    --classes="__classes__"
    --position="__position__"
    --parent-id="__parent-id__"
```
