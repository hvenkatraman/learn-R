const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;

const app = express();
const admin =express.Router()
const student =express.Router()

app.use('/admin',admin);
app.use('/student',student);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
//mongoose.connect('mongodb://localhost:27017/mydatabase')
//.then(() => console.log('Connected to MongoDB'))
//,.catch(err => console.error('Could not connect to MongoDB', err));

// Simple route

admin.get('/home',(req,res,next)=>{
    res.send('Its home of admin subroute'  );

    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);

    console.log('Its home of admin subroute')


})
student.get('/home',(req,res,next)=>
    {
    res.send('Its home of student subroute')


    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);

    console.log('Its home of student subroute ')

    })
app.get('/home',(req,res,next)=>
    {
    console.log('Its home of main route which is app route')
   res.send('Its home of main route which is app route')


    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);

    } )

//app.get('/', (req, res) => {
  //res.send('Hello World!');
//});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
