## setup HTML title for all pages
`/bitnami/wordpress/wp-content/themes/main-theme/functions.php`
```php
<?php

function my_page_title_func() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'my_page_title_func');
```
