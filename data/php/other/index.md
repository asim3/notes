## Superglobals

### $_GET
variables passed through a URL or a form.
```php
array(1) { ["my_var"]=> string(4) "asim" } 
```


### $_POST
variables passed through a form.
```php
array(0) { } 
```


### $_FILES
files uploaded to the script.
```php
array(0) { } 
```


### $_REQUEST
variables passed through the form or URL.
```php
array(1) { ["my_var"]=> string(4) "asim" }
```


### $GLOBALS
All superglobal variable.
```php
$GLOBALS['_GET'];
$GLOBALS['_POST'];
$GLOBALS['_FILES'];
$GLOBALS['_REQUEST'];
```


### $_COOKIE
Contains information about variables passed through a cookie.
```php
array(0) { } 
```


### $_SESSION
Contains information about variables passed through a session.
```php
NULL
```


### $_SERVER
Contains information about the server environment.
```php
array(36) {
    ["HTTP_HOST"]                    * => string(14) "localhost:8080" 
    ["HTTP_USER_AGENT"]                => string(80) "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0" 
    ["HTTP_ACCEPT"]                    => string(85) "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8" 
    ["HTTP_ACCEPT_LANGUAGE"]           => string(14) "en-US,en;q=0.5" 
    ["HTTP_ACCEPT_ENCODING"]           => string(17) "gzip, deflate, br" 
    ["HTTP_CONNECTION"]                => string(10) "keep-alive" 
    ["HTTP_UPGRADE_INSECURE_REQUESTS"] => string(1) "1" 
    ["HTTP_SEC_FETCH_DEST"]            => string(8) "document" 
    ["HTTP_SEC_FETCH_MODE"]            => string(8) "navigate" 
    ["HTTP_SEC_FETCH_SITE"]            => string(4) "none" 
    ["HTTP_SEC_FETCH_USER"]            => string(2) "?1" 
    ["PATH"]                           => string(60) "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" 
    ["SERVER_SIGNATURE"]               => string(72) "Apache/2.4.54 (Debian) Server at localhost Port 8080" 
    ["SERVER_SOFTWARE"]                => string(22) "Apache/2.4.54 (Debian)" 
    ["SERVER_NAME"]                    => string(9) "localhost" 
    ["SERVER_ADDR"]                    => string(10) "172.18.0.3" 
    ["SERVER_PORT"]                    => string(4) "8080" 
    ["REMOTE_ADDR"]                  * => string(10) "172.18.0.1" 
    ["DOCUMENT_ROOT"]                  => string(13) "/var/www/html" 
    ["REQUEST_SCHEME"]                 => string(4) "http" 
    ["CONTEXT_PREFIX"]                 => string(0) "" 
    ["CONTEXT_DOCUMENT_ROOT"]          => string(13) "/var/www/html" 
    ["SERVER_ADMIN"]                   => string(19) "webmaster@localhost" 
    ["SCRIPT_FILENAME"]                => string(23) "/var/www/html/index.php" 
    ["REMOTE_PORT"]                    => string(5) "51868" 
    ["GATEWAY_INTERFACE"]              => string(7) "CGI/1.1" 
    ["SERVER_PROTOCOL"]                => string(8) "HTTP/1.1" 
    ["REQUEST_METHOD"]                 => string(3) "GET" 
    ["QUERY_STRING"]                 * => string(11) "my_var=asim" 
    ["REQUEST_URI"]                  * => string(13) "/?my_var=asim" 
    ["SCRIPT_NAME"]                    => string(10) "/index.php" 
    ["PHP_SELF"]                       => string(10) "/index.php" 
    ["REQUEST_TIME_FLOAT"]             => float(1667974453.4699) 
    ["REQUEST_TIME"]                   => int(1667974453) 
    ["argv"]                         * => array(1) { [0]=> string(11) "my_var=asim" } 
    ["argc"]                           => int(1) 
}
```


### $_ENV
Contains information about the environment variables.
```php
array(24) { 
    ["HOSTNAME"]         => string(12) "87fa9d1a6cd8" 
    ["PHP_VERSION"]      => string(6) "7.4.33" 
    ["APACHE_CONFDIR"]   => string(12) "/etc/apache2" 
    ["PHP_INI_DIR"]      => string(18) "/usr/local/etc/php" 
    ["GPG_KEYS"]         => string(81) "42670A7F0441C89E4FDC04EF02D 5A52880781F7556910DEBA312" 
    ["PHP_LDFLAGS"]      => string(12) "-Wl,-O1 -pie" 
    ["PWD"]              => string(13) "/var/www/html" 
    ["APACHE_LOG_DIR"]   => string(16) "/var/log/apache2" 
    ["LANG"]             => string(1) "C" 
    ["PHP_SHA256"]       => string(64) "924846abfdd3f580937789ec4eb82a27b927" 
    ["APACHE_PID_FILE"]  => string(28) "/var/run/apache2/apache2.pid" 
    ["PHPIZE_DEPS"]      => string(76) "autoconf dpkg-dev file g++ gcc libc-dev make pkg-config re2c" 
    ["TERM"]             => string(5) "xterm" 
    ["PHP_URL"]          => string(51) "https://www.php.net/distributions/php-7.4.33.tar.xz" 
    ["APACHE_RUN_GROUP"] => string(8) "www-data" 
    ["APACHE_LOCK_DIR"]  => string(17) "/var/lock/apache2" 
    ["SHLVL"]            => string(1) "0" 
    ["PHP_CFLAGS"]       => string(83) "-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64" 
    ["APACHE_RUN_DIR"]   => string(16) "/var/run/apache2" 
    ["APACHE_ENVVARS"]   => string(20) "/etc/apache2/envvars" 
    ["APACHE_RUN_USER"]  => string(8) "www-data" 
    ["PATH"]             => string(60) "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" 
    ["PHP_ASC_URL"]      => string(55) "https://www.php.net/distributions/php-7.4.33.tar.xz.asc" 
    ["PHP_CPPFLAGS"]     => string(83) "-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64" } 
```
