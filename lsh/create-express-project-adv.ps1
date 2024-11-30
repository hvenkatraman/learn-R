# Prompt user for project name
$projectName = Read-Host "Enter project name"

# Create project folder and navigate into it
New-Item -ItemType Directory -Name $projectName
Set-Location -Path $projectName

# Initialize npm project
npm init -y

# Install necessary packages
npm install express cookie-parser body-parser nodemon mongoose mongodb pg mysql sqlite3

# Create a basic index.js template
@"
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

// SQLite3
/*
const sqlite3 = require('sqlite3').verbose();
const sqliteDB = new sqlite3.Database(':memory:', err => {
  if (err) {
    console.error('Could not connect to SQLite3', err);
  } else {
    console.log('Connected to SQLite3');
  }
});
*/

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
"@ | Set-Content -Path "index.js"

# Edit package.json to use nodemon
(Get-Content package.json) -replace '"test": "echo \\\"Error: no test specified\\\" && exit 1"', '"start": "nodemon index.js"' | Set-Content package.json

Write-Host "Express project '$projectName' created successfully."
