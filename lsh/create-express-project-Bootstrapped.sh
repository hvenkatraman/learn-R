#!/bin/bash

# Prompt user for project name
read -p "Enter project name: " projectName

# Create project folder and navigate into it
mkdir "$projectName"
cd "$projectName"

# Initialize npm project
npm init -y

# Install necessary packages
npm install express cookie-parser body-parser nodemon mongoose ejs cors dotenv morgan

# Create a basic index.js template
cat <<EOL > index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser()); // For handling cookies
app.use(cors()); // For enabling CORS
app.use(morgan('dev')); // For logging requests

// Set view engine
app.set('view engine', 'ejs');

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Simple route
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello World!' });
});

/**
 * Example for parsing incoming requests
 */

// Parsing route parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User ID: \${userId}\`);
});

// Parsing query parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(\`Search query: \${query}\`);
});

// Sub-routing example
const subRouter = express.Router();
subRouter.get('/info', (req, res) => {
  res.send('This is a sub-route example.');
});
app.use('/sub', subRouter);

// Handling cookies
app.get('/set-cookie', (req, res) => {
  res.cookie('token', '12345').send('Cookie has been set!');
});
app.get('/get-cookie', (req, res) => {
  const token = req.cookies.token;
  res.send(\`Cookie value: \${token}\`);
});

// req and res objects usage
app.get('/info', (req, res) => {
  console.log(req.headers); // Access headers
  console.log(req.method); // HTTP method
  res.status(200).json({ success: true, message: 'Information sent!' });
});

// Custom middleware
app.use((req, res, next) => {
  console.log(\`Request URL: \${req.url}\`);
  next(); // Pass control to the next middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
EOL

# Create a basic EJS template
mkdir views
cat <<EOL > views/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express App</title>
</head>
<body>
    <h1><%= message %></h1>
</body>
</html>
EOL

# Edit package.json to use nodemon
sed -i 's/"test": "echo \\\"Error: no test specified\\\" && exit 1"/"start": "nodemon index.js"/' package.json

echo "Express project '$projectName' created successfully."
