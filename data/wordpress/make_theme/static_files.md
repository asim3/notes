# CSS & JS

## functions.php
`/bitnami/wordpress/wp-content/themes/main-theme/functions.php`
```php
<?php
function my_load_css_func() {
    wp_register_style('asim_main-css', get_template_directory_uri() . '/assets/css/main.css', array(), false, 'all' );
    wp_enqueue_style('asim_main-css');
}


function my_load_js_func() {	
    wp_enqueue_script('jquery');
		wp_register_script('custom', get_template_directory_uri() . '/assets/js/main.js', 'jquery', false, true);
		wp_enqueue_script('custom');
}


add_action('wp_enqueue_scripts', 'my_load_css_func');
add_action('wp_enqueue_scripts', 'my_load_js_func');
```


## CSS
`/bitnami/wordpress/wp-content/themes/main-theme/assets/css/main.css`
```
* {
    background: red;
}
```


## JS
`/bitnami/wordpress/wp-content/themes/main-theme/assets/js/main.js`
```js
alert("by asim");
```
