# WordPress

[Tutorial For Beginners](https://youtube.com/playlist?list=PLpcSpRrAaOaqBzG9rTA66V494iTRySkXq&si=p6gKjAcwLkdSzzBK)


## users
```bash
wp user list

wp user get user

wp user create asim asim@cli.com --role=editor --send-email
# Success: Created user 3.
# Password: b#zd^c9o$iz2zxbZtY$C8Icu

wp user reset-password asim --skip-email --show-password --porcelain

wp user delete asim --yes
```


## roles
```bash
wp user set-role asim subscriber
# Add new Comment (submit for review)

wp user set-role asim contributor
# View all Posts
# Add  new Posts (submit for review)
# List all Comments

wp user set-role asim author
# Delete all Posts
# Add new Media
# List all Comments

wp user set-role asim editor
# Delete all Posts
# Delete all Media
# Delete all Pages
# Delete all Comments

wp user set-role asim administrator
# Delete all Themes
# Delete all Plugins
# Delete all Users
# General Settings
```


## posts
```bash
wp post list

wp post url-to-id /2025/02/22/as-editor/
# 22

wp post url-to-id 2025/02/22/as-editor
# 22

wp post delete 22 --force
```


## add new 50 posts
```bash
cat <<EOF | wp post generate --count=50 --post_title="My Post Title" --post_content --post_type=post --post_status=publish --post_author=5
WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI.

WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI.
WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI.
WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI.

WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI WordPress CLI.
EOF
```


## export
Exports WordPress content to a WXR file
```bash
wp export --dir=/bitnami/wordpress/
# Starting export process...
# Writing to file /bitnami/wordpress/asimmainsite.wordpress.2025-02-22.000.xml
# Success: All done with export.

ls -al /bitnami/wordpress/
# -rw-r--r-- 1 1001 root 45569 Feb 22 18:37 asimmainsite.wordpress.2025-02-22.000.xml
# -r--r----- 1 1001 root  4588 Feb 22 13:38 wp-config.php
# drwxrwxr-x 7 1001 root  4096 Feb 22 13:38 wp-content
```


## import
Imports content from a given WXR file
```bash
wp import /bitnami/wordpress/asimmainsite.wordpress.2025-02-22.000.xml --authors=create

wp import /bitnami/wordpress/asimmainsite.wordpress.2025-02-22.000.xml --authors=mapping.csv

wp import /bitnami/wordpress/asimmainsite.wordpress.2025-02-22.000.xml --authors=skip
```


## search & replace
Searches/replaces strings in the database
```txt
wp search-replace <old> <new> [<table>...] [--dry-run] [--network] [--all-tables-with-prefix] [--all-tables] [--export[=<file>]] [--export_insert_size=<rows>] [--skip-tables=<tables>] [--skip-columns=<columns>] [--include-columns=<columns>] [--precise] [--recurse-objects] [--verbose] [--regex] [--regex-flags=<regex-flags>] [--regex-delimiter=<regex-delimiter>] [--regex-limit=<regex-limit>] [--format=<format>] [--report] [--report-changed-only] [--log[=<file>]] [--before_context=<num>] [--after_context=<num>]
```
