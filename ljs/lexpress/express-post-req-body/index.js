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


app.post('/post_req_body', (req, res) => {
const req_body=req.body;
console.log(req_body);
    console.log(req_body.email);
    console.log(req_body.name);
    console.log(req_body.age);
  res.send('Post Request Body');

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
