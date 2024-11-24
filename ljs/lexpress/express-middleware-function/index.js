const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;
const middleware1= (req,res,next)=>{console.log('Middleware1');next();}
const middleware2= (obj)=>
{
    return(req,res,next)=>
    {
     console.log('Middleware2');
     req.name=obj.name
     req.email=obj.email
     next();
    }
}
//const middleware3= (req,res,next)=>{res.send('Response from middlware3');console.log('Middleware3');next();};
//const middleware4= (req,res,next)=>{console.log('Middleware4');next();};

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
//mongoose.connect('mongodb://localhost:27017/mydatabase')
//.then(() => console.log('Connected to MongoDB'))
//.catch(err => console.error('Could not connect to MongoDB', err));

// Simple route

app.use(middleware1);
app.use(middleware2({name:"hvr",email:"hvr@gmail.com"}));
//app.use(middleware3);
//app.use(middleware4);

  app.get('/middleware_test',(req, res,next) => {

  console.log(req.name);
  console.log(req.email);

  res.send('Finally reached main respose after four middlewares');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
