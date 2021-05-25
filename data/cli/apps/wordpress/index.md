# WordPress
Manage WordPress through the command-line.


## info
```bash
wp cli info

wp cli check-update
# Success: WP-CLI is at the latest version.
```


## package
```bash
wp package list
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


## i18n
```bash
#   i18n                  Provides internationalization tools for WordPress projects.
#   import                Imports content from a given WXR file.
#   language              Installs, activates, and manages language packs.
```
