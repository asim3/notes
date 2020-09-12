
`nano ./Dockerfile`
```dockerfile
FROM php:7.3-apache
EXPOSE 80
RUN echo "<br>RUN: $(date '+%x %X') - by $(whoami)" >> /var/www/html/index.php
```