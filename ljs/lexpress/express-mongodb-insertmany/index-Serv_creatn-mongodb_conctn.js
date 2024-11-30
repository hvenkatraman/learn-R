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

})
app.listen(3000,()=>{console.log('Express server started sucessfully')});


