## header
`/bitnami/wordpress/wp-content/themes/main-theme/header.php`
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My Header Title</title>

    <?php wp_head();?>

</head>
<body>
```


## footer
`/bitnami/wordpress/wp-content/themes/main-theme/footer.php`
```html
<footer>
    <h4>My Footer</h4>
</footer>

<?php wp_footer();?>

</body>
</html>
```


## Home Page
`/bitnami/wordpress/wp-content/themes/main-theme/front-page.php`
```php
<?php get_header();?>

<h1><?php the_title();?></h1>

<?php get_footer();?>
```


## Page
`/bitnami/wordpress/wp-content/themes/main-theme/page.php`
```php
<?php get_header();?>

<h1><?php the_title();?></h1>

<?php get_footer();?>
```
