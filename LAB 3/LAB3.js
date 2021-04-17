//create db

use student

//create collection

db.createCollection("students")

show collections

//insert into collection

db.students.insert({

    rollNo:19,

    age:18,

    contact:9009009191,

    emailId:"ak.cs18@bmsce.ac.in"

})

db.students.find().pretty()

db.students.insertMany([{

    rollNo:18,

    age:18,

    contact:9222222222,

    emailId:"abc.cs18@bmsce.ac.in"

},

{

    rollNo:10,

    age:18,

    contact:3322332233,

    emailId:"samir.cs18@bmsce.ac.in"

},

{

    rollNo:44,

    age:18,

    contact:7444444444,

    emailId:"rere.cs18@bmsce.ac.in"

}])

//find all

db.students.find().pretty()

//update

db.students.updateOne({rollNo:10},

{ $set: { emailId:"ree.cs18@bmsce.ac.in"}})

//find specific

db.students.find({rollNo:10}).pretty()

//insert and then replace

db.students.insert({

    rollNo:11,

    age:18,

    contact:9243334442,

    emailId:"abs.cs18@bmsce.ac.in",

    name:"ABC"

})

db.students.replaceOne({rollNo:11},

 {  rollNo:11,

    age:18,

    contact:9243861984,

    emailId:"abs.cs18@bmsce.ac.in",

    name:"FEM"})

db.students.find({rollNo:11}).pretty()

//remove row

db.students.remove({name:"FEM"})



//find all

db.students.find().pretty();



//mongoexport --db=student --collection=students --type=csv --fields=rollNo,age,contact,emailId,name --out=D:\studentinfo.csv



//drop databse

db.dropDatabase()



mongoimport --db student --collection students --type csv --drop D:\studentinfo.csv --headerline 