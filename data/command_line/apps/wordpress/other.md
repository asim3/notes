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
Manages widgets, including adding and moving them within sidebars.
```bash
  # add             Adds a widget to a sidebar.
  # deactivate      Deactivates one or more widgets from an active sidebar.
  # delete          Deletes one or more widgets from a sidebar.
  # list            Lists widgets associated with a sidebar.
  # move            Moves the position of a widget.
  # reset           Resets sidebar.
  # update          Updates options for an existing widget.
```
