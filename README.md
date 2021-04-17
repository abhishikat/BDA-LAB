# BDA-LAB
### BIG DATA ANALYTICS LAB

## Program 1 : 

## Program 2 : 

### Experiment #1: Perform the following DB operations using Cassandra. 

    1. Create a keyspace by name Employee
    2. Create a column family by name Employee-Info with attributes 
       Emp_Id Primary Key, Emp_Name, Designation, Date_of_Joining, Salary, 
       Dept_Name
    3. Insert the values into the table in batch
    4. Update Employee name and Department of Emp-Id 121
    5. Sort the details of Employee records based on salary
    6. Alter the schema of the table Employee_Info to add a column Projects which stores a set of Projects done by the corresponding Employee.
    7. Update the altered table to add project names.
    8. Create a TTL of 15 seconds to display the values of Employees.

### Experiment #2: Perform the following DB operations using Cassandra.
    1. Create a keyspace by name Library
    2. Create a column family by name Library-Info with attributes 
       Stud_Id Primary Key,
       Counter_value of type Counter,
       Stud_Name, Book-Name, Book-Id, Date_of_issue
    3. Insert the values into the table in batch
    4. Display the details of the table created and increase the value of the counter 
    5. Write a query to show that a student with id 112 has taken a book “BDA” 2 times.
    6. Export the created column to a csv file
    7. Import a given csv dataset from local file system into Cassandra column family
### Experiment #3: Perform the following DB operations using MongoDB.
    Create a database “Student” with the following attributes  Rollno, Age, ContactNo, Email-Id.2. Insert appropriate values3. Write query to update Email-Id of a student with rollno 10.4. Replace the student name from “ABC” to “FEM” of rollno 11.5. Export the created table into local file system6. Drop the table7. Import a given csv dataset from local file system into mongodb collection.
