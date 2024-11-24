const express = require('express');
const mongoose = require('mongoose');
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

// Simple route
app.get('/res_format', (req, res) => {

  res.format({
      "text/plain":()=>{res.send('Plain text or html format')},
      "text/json":()=>{res.json({
          name:"hvr",
          age:37,
          height:5.10,
          email:"hvenkatramana@gmail.com"})},

      "text/html":()=>{res.render("./pages/test.ejs",
          {name :"hvr",
           age:37,
           email:"hvenkatramana9@gmail.com"
          }
      )},
      default:()=>{res.send ("format not matched")}
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
