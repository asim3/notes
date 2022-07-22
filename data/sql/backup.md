## Backup
```bash
pg_dump -U postgres -d my_database > /tmp/my_dump_backup.sql


# gzip
pg_dump -U postgres -d my_database | gzip -c > /tmp/my_tar_backup.gz

pg_dump -U postgres -d my_database -h hostname  -p port | gzip -c > /tmp/my_tar_backup.gz

pg_dump -U postgres -d my_database -h localhost -p 5432 | gzip -c > /tmp/my_tar_backup.gz


# URI
pg_dump postgresql://postgres:admin@localhost:5432/my_database | gzip -c > /tmp/my_tar_backup.gz
```


## Restore .SQL
```bash
createdb -U postgres my_database_2

psql -U postgres -d my_database_2 < /tmp/my_backup.sql

psql -U postgres -d my_database_2 -c 'SELECT count(*) FROM Person'
```


## Restore .GZ
```bash
createdb -U postgres my_database_5

gzip -dck /tmp/my_tar_backup.gz | psql -U postgres -d my_database_5

psql -U postgres -d my_database_5 -c 'SELECT count(*) FROM Person'
```


## insert 1M data
```bash
cat  <<EOF > /tmp/my_backup.sql
CREATE TABLE Person (ID int, FirstName varchar(255), LastName varchar(255), Age int);
INSERT INTO Person (ID, FirstName, LastName) VALUES 
EOF

for i in {1..1000000}; 
do 
  echo "($i, 'First Name $i', 'Last Name $i')," >> /tmp/my_backup.sql
done;

echo "(999999999, 'First Name End', 'Last Name End');" >> /tmp/my_backup.sql
```


## help
```text
General options:
  -d, --dbname=NAME        connect to database name
  -f, --file=FILENAME      output file name (- for stdout)
  -F, --format=c|d|t       backup file format (should be automatic)
  -l, --list               print summarized TOC of the archive
  -v, --verbose            verbose mode
  -V, --version            output version information, then exit
  -?, --help               show this help, then exit

Options controlling the restore:
  -a, --data-only              restore only the data, no schema
  -c, --clean                  clean (drop) database objects before recreating
  -C, --create                 create the target database                         <<<<<
  -e, --exit-on-error          exit on error, default is to continue
  -I, --index=NAME             restore named index
  -j, --jobs=NUM               use this many parallel jobs to restore             <<<<<
  -L, --use-list=FILENAME      use table of contents from this file for
                               selecting/ordering output
  -n, --schema=NAME            restore only objects in this schema
  -N, --exclude-schema=NAME    do not restore objects in this schema
  -O, --no-owner               skip restoration of object ownership
  -P, --function=NAME(args)    restore named function
  -s, --schema-only            restore only the schema, no data
  -S, --superuser=NAME         superuser user name to use for disabling triggers
  -t, --table=NAME             restore named relation (table, view, etc.)
  -T, --trigger=NAME           restore named trigger
  -x, --no-privileges          skip restoration of access privileges (grant/revoke)
  -1, --single-transaction     restore as a single transaction
  --disable-triggers           disable triggers during data-only restore
  --enable-row-security        enable row security
  --if-exists                  use IF EXISTS when dropping objects
  --no-comments                do not restore comments
  --no-data-for-failed-tables  do not restore data of tables that could not be
                               created
  --no-publications            do not restore publications
  --no-security-labels         do not restore security labels
  --no-subscriptions           do not restore subscriptions
  --no-tablespaces             do not restore tablespace assignments
  --section=SECTION            restore named section (pre-data, data, or post-data)
  --strict-names               require table and/or schema include patterns to
                               match at least one entity each
```
