## select where
```sql
SELECT * FROM Customers
WHERE CustomerID=1;

SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München'); 

SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA'; 

SELECT * FROM Customers
WHERE Address IS NOT NULL;

SELECT * FROM Customers
WHERE CustomerName LIKE '%or%';

SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;


SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
WHERE Customers.CustomerID=Orders.CustomerID;
```


## no duplicate values
```sql
SELECT DISTINCT Country FROM Customers; 

SELECT COUNT(DISTINCT Country) FROM Customers; 
```


## order by
```sql
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC; 
```


## add new
```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');


INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');
```


## update
```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
```


## delete
```sql
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste'; 
```


## limit
```sql
-- MySQL
SELECT * FROM Customers LIMIT 3;

-- SQL Server / MS Access
SELECT TOP 3 * FROM Customers; 

-- Oracle 12
SELECT * FROM Customers
FETCH FIRST 3 ROWS ONLY; 
```


## Alias
```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;


SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
FROM Customers; 


-- MySQL
SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address
FROM Customers; 


SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
```


## min & max
```sql
SELECT MIN(Price) AS smallest_price
FROM Products;

SELECT MAX(Price) AS largest_price
FROM Products; 
```


## count
```sql
SELECT COUNT(ProductID)
FROM Products;

SELECT AVG(Price)
FROM Products;

SELECT SUM(Quantity)
FROM OrderDetails; 
```
