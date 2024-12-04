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

// MongoDB with Mongoose
/*
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('Connected to MongoDB with Mongoose'))
.catch(err => console.error('Could not connect to MongoDB', err));
*/

// MongoDB Native Driver
/*
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) {
    console.error('Could not connect to MongoDB', err);
  } else {
    console.log('Connected to MongoDB');
  }
});
*/

// PostgreSQL
/*
const { Client } = require('pg');
const pgClient = new Client({
  user: 'yourUser',
  host: 'localhost',
  database: 'mydatabase',
  password: 'yourPassword',
  port: 5432,
});
pgClient.connect(err => {
  if (err) {
    console.error('Could not connect to PostgreSQL', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});
*/

// MySQL
/*
const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'yourUser',
  password: 'yourPassword',
  database: 'mydatabase'
});
mysqlConnection.connect(err => {
  if (err) {
    console.error('Could not connect to MySQL', err);
  } else {
    console.log('Connected to MySQL');
  }
});
*/

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
