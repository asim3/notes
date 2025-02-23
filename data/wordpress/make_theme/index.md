## add new Theme
```bash
touch wp-content/themes/main-theme/index.php
touch wp-content/themes/main-theme/style.css
touch wp-content/themes/main-theme/front-page.php
touch wp-content/themes/main-theme/page.php
touch wp-content/themes/main-theme/screenshot.png  # 1200 px * 900 px
```


## index.php
`/bitnami/wordpress/wp-content/themes/main-theme/index.php`
```php
<?php
// Silence is golden.
```


## Theme Info
`/bitnami/wordpress/wp-content/themes/main-theme/style.css`
```css
/**
Theme Name: Asim Web Apps Main Theme
Author: Asim Web Apps
Author URI: https://asimt.sa
Description: Asim Web Apps Main Theme.
Version: 0.1.0
Text Domain: asim-main-theme
**/
```


## Home Page
`/bitnami/wordpress/wp-content/themes/main-theme/front-page.php`
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My WP Home Tiitle</title>
</head>
<body>
    My WP Home Page
</body>
</html>
```


## Page
`/bitnami/wordpress/wp-content/themes/main-theme/page.php`
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My WP Title</title>
</head>
<body>
    My WP Page
</body>
</html>
```
