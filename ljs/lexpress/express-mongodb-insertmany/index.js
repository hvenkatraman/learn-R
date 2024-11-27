const express =require('express');
const mongoDb=require('mongodb');

const app = express();

const connectionUrl = "mongodb://localhost:27017"

const client = new mongoDb.MongoClient(connectionUrl);

client
    .connect()
    .then(()=>{console.log('Mongodb-Connection established sucessfully')})
    .catch((error)=>{console.log(error.message)})

const db = client.db('schoolDb1');
const student = db.collection('student');

app.post('/school',(req,res,next)=>{;

student.insertOne({name:'Venkat',email:"hvenkatraman@gmail.com",dept:'CS'}).then(()=>res.status(201).send('student added successfully'))
    .catch((error)=>{console.log(error.stack)});

})
app.listen(3000,()=>{console.log('Express server started sucessfully')});


