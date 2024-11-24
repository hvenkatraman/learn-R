const express = require('express');
//const mongoose = require('mongoose');
const mongoDb =require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
//mongoose.connect('mongodb://localhost:27017/mydatabase')
//.then(() => console.log('Connected to MongoDB'))
//.catch(err => console.error('Could not connect to MongoDB', err));
const connectionUrl='mongodb://localhost:27017';
const client= new mongoDb.MongoClient(connectionUrl);
client
    .connect()
    .then(()=>{console.log("Database connection established sucessfully")})
    .catch((error)=>{console.log(error)});


const db = client.db("SchoolDb");

const student =db.collection('student');
app.post('/school',(req,res,next)=>
{
const reqBody=req.body;

 //student.insertOne({name:"hvr",age:"38",email:"hvr@gmail.com"})
 student.insertOne(reqBody)
        .then(()=>{res.status(201).send("One student document inserted sucessfully");console.log(reqBody)})
        .catch((error)=>{console.log(error.stack)});
});

// Simple route/
// /app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
