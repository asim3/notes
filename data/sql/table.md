## Show Tables
```sql
SHOW TABLES;
```


## add table
`psql -U postgres -d my_database`
```sql
CREATE TABLE Person (
    ID int NOT NULL,
    PK INT AUTO_INCREMENT,
    PersonID int,
    FirstName varchar(255),
    LastName varchar(255) NOT NULL,
    Address varchar(255),
    City varchar(255),
    Age int,
    PRIMARY KEY (ID),
    UNIQUE (Age)
);


CREATE TABLE Order (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
); 
```


## INSERT
```sql
INSERT INTO Person (ID, FirstName, LastName) 
VALUES (1, 'test1', 'test1'); 

INSERT INTO Person (ID, FirstName, LastName) VALUES 
(12, 'test2', 'test2'), 
(44, 'test3', 'test3'), 
(86, 'test4', 'test4'); 


SELECT * FROM Person;
--  id | personid | firstname | lastname | address | city | age 
-- ----+----------+-----------+----------+---------+------+-----
--   1 |          | test1     | test1    |         |      |    
--  12 |          | test2     | test2    |         |      |    
--  44 |          | test3     | test3    |         |      |    
--  86 |          | test4     | test4    |         |      |    
-- (4 rows)
```


## delete table
```sql
CREATE TABLE MyTable (Name varchar(255), Age int);

\dt
--          List of relations
--  Schema |  Name   | Type  |  Owner  
-- --------+---------+-------+---------
--  public | mytable | table | my_user
-- (1 row)


DROP TABLE MyTable;


-- delete the data inside a table
TRUNCATE TABLE MyTable; 
```


## edit table
```sql
ALTER TABLE MyTable
ADD column_name datatype;

ALTER TABLE Customers
ADD Email varchar(255);
```
