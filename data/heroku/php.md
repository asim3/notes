## app setup

```bash
echo "<?php include_once("master.html"); ?>" >> index.php
echo "{}" >> composer.json
echo "web: vendor/bin/heroku-php-apache2 web/" >> Procfile
```
