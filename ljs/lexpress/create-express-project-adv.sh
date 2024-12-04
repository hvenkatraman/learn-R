#!/bin/bash

# Function to display an error message and exit
function error_exit {
    echo "Error: $1"
    exit 1
}

# Prompt for project name
read -p "Enter project name: " projectName

# Ensure Python distutils is installed
if ! python3 -m pip show setuptools &> /dev/null; then
    echo "Installing Python distutils..."
    python3 -m pip install setuptools || error_exit "Failed to install Python distutils."
fi

# Create project folder and navigate into it
mkdir "$projectName" || error_exit "Failed to create project directory."
cd "$projectName" || error_exit "Could not navigate to project directory."

# Initialize npm project
npm init -y || error_exit "Failed to initialize npm project."

# Install necessary packages without sqlite3
npm install express cookie-parser body-parser nodemon mongoose mongodb pg mysql || error_exit "Failed to install npm packages."

# Create a basic index.js template
cat <<EOL > index.js
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
  console.log(\`Server is running on port \${port}\`);
});
EOL

# Edit package.json to use nodemon
sed -i 's/"test": "echo \\\"Error: no test specified\\\" && exit 1"/"start": "nodemon index.js"/' package.json || error_exit "Failed to update package.json."

echo "Express project '$projectName' created successfully."
