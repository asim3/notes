[PostgreSQL Recursive](https://www.postgresql.org/docs/current/queries-with.html)


## select
```sql
SELECT 123 AS MyNumber;
--  mynumber 
-- ----------
--       123
-- (1 row)
```


## for loop
```sql
WITH RECURSIVE MyLoopTable AS (
  SELECT 123 AS MyNumber
  UNION
  SELECT MyNumber + 1 FROM MyLoopTable
  WHERE MyNumber < 130
)
SELECT * FROM MyLoopTable;

--  mynumber 
-- ----------
--       123
--       124
--       125
--       126
--       127
--       128
--       129
--       130
-- (8 rows)
```


## insert data
```bash
cat  <<EOF > /tmp/my_employees_db.sql
CREATE TABLE Employee (ID int, FirstName varchar(255), LastName varchar(255), Manager int);
INSERT INTO Employee (ID, FirstName, LastName, Manager) VALUES
(1, 'First Name 1', 'Last Name 1', NULL),
(2, 'First Name 2', 'Last Name 2', NULL),
(3, 'First Name 3', 'Last Name 3', NULL),
(4, 'First Name 4', 'Last Name 4', NULL),
(5, 'First Name 5', 'Last Name 5', NULL),
(6, 'First Name 6', 'Last Name 6', NULL),
(7, 'First Name 7', 'Last Name 7', NULL),
(8, 'First Name 8', 'Last Name 8', NULL),
(9, 'First Name 9', 'Last Name 9', NULL),
EOF

for i in {10..10000};
do
  echo "($i, 'First Name $i', 'Last Name $i', ${i:0:-1})," >> /tmp/my_employees_db.sql
done;

echo "(999999999, 'First Name End', 'Last Name End', NULL);" >> /tmp/my_employees_db.sql

export PGPASSWORD=my_password
psql -U my_user -d my_database < /tmp/my_employees_db.sql
```


## select managers
```sql
SELECT * FROM Employee WHERE Manager IS NULL;
--     id     |   firstname    |   lastname    | manager 
-- -----------+----------------+---------------+---------
--          1 | First Name 1   | Last Name 1   |        
--          2 | First Name 2   | Last Name 2   |        
--          3 | First Name 3   | Last Name 3   |        
--          4 | First Name 4   | Last Name 4   |        
--          5 | First Name 5   | Last Name 5   |        
--          6 | First Name 6   | Last Name 6   |        
--          7 | First Name 7   | Last Name 7   |        
--          8 | First Name 8   | Last Name 8   |        
--          9 | First Name 9   | Last Name 9   |        
--  999999999 | First Name End | Last Name End |        
-- (10 rows)
```


## self Join managers
```sql
SELECT * FROM Employee AS A, Employee AS B 
WHERE A.ID = B.Manager LIMIT 12;

--  id |  firstname   |  lastname   | manager | id |   firstname   |   lastname   | manager 
-- ----+--------------+-------------+---------+----+---------------+--------------+---------
--   1 | First Name 1 | Last Name 1 |         | 10 | First Name 10 | Last Name 10 |       1
--   1 | First Name 1 | Last Name 1 |         | 11 | First Name 11 | Last Name 11 |       1
--   1 | First Name 1 | Last Name 1 |         | 12 | First Name 12 | Last Name 12 |       1
--   1 | First Name 1 | Last Name 1 |         | 13 | First Name 13 | Last Name 13 |       1
--   1 | First Name 1 | Last Name 1 |         | 14 | First Name 14 | Last Name 14 |       1
--   1 | First Name 1 | Last Name 1 |         | 15 | First Name 15 | Last Name 15 |       1
--   1 | First Name 1 | Last Name 1 |         | 16 | First Name 16 | Last Name 16 |       1
--   1 | First Name 1 | Last Name 1 |         | 17 | First Name 17 | Last Name 17 |       1
--   1 | First Name 1 | Last Name 1 |         | 18 | First Name 18 | Last Name 18 |       1
--   1 | First Name 1 | Last Name 1 |         | 19 | First Name 19 | Last Name 19 |       1
--   2 | First Name 2 | Last Name 2 |         | 20 | First Name 20 | Last Name 20 |       2
--   2 | First Name 2 | Last Name 2 |         | 21 | First Name 21 | Last Name 21 |       2
-- (12 rows)
```


## descendants
```sql
WITH RECURSIVE MyLoop AS (
  SELECT Employee.ID, Employee.FirstName, Employee.LastName, Employee.Manager, 1 AS H_Level
  FROM Employee WHERE ID = 3
  UNION ALL
  SELECT Employee.ID, Employee.FirstName, Employee.LastName, Employee.Manager, MyLoop.H_Level + 1 AS H_Level
  FROM MyLoop, Employee 
  WHERE MyLoop.ID = Employee.Manager
)
SELECT * FROM MyLoop;
```


## descendants JOIN
```sql
WITH RECURSIVE MyLoop AS (
  SELECT Employee.ID, Employee.FirstName, Employee.LastName, Employee.Manager, 1 AS H_Level
  FROM Employee WHERE ID = 300
  UNION ALL
  SELECT Employee.ID, Employee.FirstName, Employee.LastName, Employee.Manager, MyLoop.H_Level + 1 AS H_Level 
  FROM MyLoop
  JOIN Employee ON MyLoop.ID = Employee.Manager
)
SELECT * FROM MyLoop;

--   id  |    firstname    |    lastname    | manager | h_level 
-- ------+-----------------+----------------+---------+---------
--   300 | First Name 300  | Last Name 300  |      30 |       1
--  3000 | First Name 3000 | Last Name 3000 |     300 |       2
--  3001 | First Name 3001 | Last Name 3001 |     300 |       2
--  3002 | First Name 3002 | Last Name 3002 |     300 |       2
--  3003 | First Name 3003 | Last Name 3003 |     300 |       2
--  3004 | First Name 3004 | Last Name 3004 |     300 |       2
--  3005 | First Name 3005 | Last Name 3005 |     300 |       2
--  3006 | First Name 3006 | Last Name 3006 |     300 |       2
--  3007 | First Name 3007 | Last Name 3007 |     300 |       2
--  3008 | First Name 3008 | Last Name 3008 |     300 |       2
--  3009 | First Name 3009 | Last Name 3009 |     300 |       2
-- (11 rows)
```


## ancestors
```sql
WITH RECURSIVE MyLoop AS (
  SELECT Employee.ID, Employee.FirstName, Employee.LastName, Employee.Manager 
  FROM Employee WHERE ID = 3009
  UNION ALL
  SELECT Employee.ID, Employee.FirstName, Employee.LastName, Employee.Manager 
  FROM MyLoop
  JOIN Employee ON MyLoop.Manager = Employee.ID
)
SELECT * FROM MyLoop;

--   id  |    firstname    |    lastname    | manager 
-- ------+-----------------+----------------+---------
--  3009 | First Name 3009 | Last Name 3009 |     300
--   300 | First Name 300  | Last Name 300  |      30
--    30 | First Name 30   | Last Name 30   |       3
--     3 | First Name 3    | Last Name 3    |        
-- (4 rows)
```
