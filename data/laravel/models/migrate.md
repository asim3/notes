## migrate
```php
php artisan migrate
php artisan migrate:fresh
# fresh: Drop all tables


php artisan migrate --seed
php artisan migrate:refresh --seed
```


## SQL
```bash
export DB_DATABASE=my_project
sudo mysql $DB_DATABASE -e "INSERT INTO my_models (first_name, last_name, description) VALUES ('test1', 'test2', 'test3');"


sudo mysql $DB_DATABASE -e "SHOW TABLES;"
// +------------------------+
// | Tables_in_my_project   |
// +------------------------+
// | failed_jobs            |
// | migrations             |
// | my_models              |
// | password_resets        |
// | personal_access_tokens |
// | users                  |
// +------------------------+


sudo mysql $DB_DATABASE -e "SELECT * FROM my_models;"
// +----+------------+------------+------------+-----------+-------------+
// | id | created_at | updated_at | first_name | last_name | description |
// +----+------------+------------+------------+-----------+-------------+
// |  1 | NULL       | NULL       | test1      | test2     | test3       |
// |  2 | NULL       | NULL       | test1      | test2     | test3       |
// +----+------------+------------+------------+-----------+-------------+
```
