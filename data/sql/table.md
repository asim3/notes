## add table
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    PersonID int,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255),
    Age int,
    PRIMARY KEY (ID),
    UNIQUE (Age)
);


CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
); 
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
