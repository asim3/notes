## archive
`/bitnami/wordpress/wp-content/themes/main-theme/archive.php`
```html
<?php get_header() ?>

<h1><?php the_archive_title() ?></h1>

<?php 
    while(have_posts()) {
        the_post(); ?>
        <div>
            <h2>archive.php</h2>
            <a href="<?php the_permalink() ?>">
                <h4><?php the_title() ?></h4>
            </a>
        </div>
    <?php } 
?>

<?php get_footer() ?>
```


## home page
`/bitnami/wordpress/wp-content/themes/main-theme/front-page.php`
```html
<?php get_header() ?>

<?php 
    while(have_posts()) {
        the_post(); ?>
        <div>
            <h2>front-page.php</h2>
            <a href="<?php the_permalink() ?>">
                <h4><?php the_title() ?></h4>
            </a>
        </div>
    <?php } 
?>

<?php get_footer() ?>
```


## Page
`/bitnami/wordpress/wp-content/themes/main-theme/index.php`
```html
<?php get_header() ?>

<h1>Index.php (501 Not Implemented)!</h1>

<?php get_footer() ?>
```


## Page
`/bitnami/wordpress/wp-content/themes/main-theme/page.php`
```html
<?php get_header() ?>

<?php 
    while(have_posts()) {
        the_post(); ?>
        <div>
            <h2>page.php</h2>
            <a href="<?php the_permalink() ?>">
                <h4><?php the_title() ?></h4>
            </a>
        </div>
    <?php } 
?>

<?php get_footer() ?>
```


## Page
`/bitnami/wordpress/wp-content/themes/main-theme/single.php`
```html
<?php get_header() ?>

<?php 
    while(have_posts()) {
        the_post(); ?>
        <div>
            <h2>single.php</h2>
            <h3><?php the_title() ?></h3>
            <div class="content">
                <?php the_content() ?>
            </div>
        </div>
    <?php } 
?>

<?php get_footer() ?>
```


