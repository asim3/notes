# CSS & JS

## functions.php
`/bitnami/wordpress/wp-content/themes/main-theme/functions.php`
```php
<?php

function my_theme_assets() {
    // CSS
    wp_register_style('asim_main-css', get_template_directory_uri() . '/assets/css/main.css', array(), false, 'all' );
    wp_enqueue_style('asim_main-css');

    // JS
    wp_enqueue_script('jquery');
    wp_register_script('custom', get_template_directory_uri() . '/assets/js/main.js', 'jquery', false, true);
    wp_enqueue_script('custom');
}

add_action('wp_enqueue_scripts', 'my_theme_assets');
```


## CSS
`/bitnami/wordpress/wp-content/themes/main-theme/assets/css/main.css`
```css
h1,
h2 {
    color: teal;
    font-weight: bold;
}
```


## JS
`/bitnami/wordpress/wp-content/themes/main-theme/assets/js/main.js`
```js
const btn = document.createElement("BUTTON")

btn.innerHTML = "CLICK ME"

btn.style = "margin: 10px;"

btn.onclick = () => alert("by asim");

document.body.appendChild(btn)
```
