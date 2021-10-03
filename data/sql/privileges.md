## privileges
```txt
SELECT   
    Allows SELECT from any column of the specified table, view, or sequence. 
    Also allows the use of COPY TO. This privilege is also needed to reference 
    existing column values in UPDATE or DELETE. For sequences, this privilege 
    also allows the use of the currval function.
    
    
INSERT
    Allows INSERT of a new row into the specified table. Also allows COPY FROM.
    
    
UPDATE
    Allows UPDATE of any column of the specified table. (In practice, any 
    nontrivial UPDATE command will require SELECT privilege as well, since it must
    reference table columns to determine which rows to update, and/or to compute 
    new values for columns.) SELECT ... FOR UPDATE also requires this privilege, 
    in addition to the SELECT privilege. For sequences, this privilege allows the 
    use of the nextval and setval functions.
    
    
DELETE
    Allows DELETE of a row from the specified table. (In practice, any nontrivial 
    DELETE command will require SELECT privilege as well, since it must reference 
    table columns to determine which rows to delete.)
    
    
RULE
    Allows the creation of a rule on the table/view. (See the CREATE RULE statement.)
    
    
REFERENCES
    To create a foreign key constraint, it is necessary to have this privilege on 
    both the referencing and referenced tables.
    
    
TRIGGER
    Allows the creation of a trigger on the specified table. (See the CREATE TRIGGER statement.)
    
    
CREATE
    For databases, allows new schemas to be created within the database.
    For schemas, allows new objects to be created within the schema. To rename an 
    existing object, you must own the object and have this privilege for the containing schema.
    For tablespaces, allows tables and indexes to be created within the tablespace, 
    and allows databases to be created that have the tablespace as their default 
    tablespace. (Note that revoking this privilege will not alter the placement of 
    existing objects.)
    
    
TEMPORARY
TEMP
    Allows temporary tables to be created while using the specified database.
    
    
EXECUTE
    Allows the use of the specified function and the use of any operators that are 
    implemented on top of the function. This is the only type of privilege that is 
    applicable to functions. (This syntax works for aggregate functions, as well.)
    
    
USAGE
    For procedural languages, allows the use of the specified language for the 
    creation of functions in that language. This is the only type of privilege 
    that is applicable to procedural languages.
    For schemas, allows access to objects contained in the specified schema 
    (assuming that the objects' own privilege requirements are also met). Essentially 
    this allows the grantee to "look up" objects within the schema.
    
    
ALL PRIVILEGES
    Grant all of the available privileges at once. The PRIVILEGES key word is 
    optional in PostgreSQL, though it is required by strict SQL.
```
