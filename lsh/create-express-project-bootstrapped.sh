#!/bin/bash

# Prompt user for project name
read -p "Enter project name: " projectName

# Create project folder and navigate into it
mkdir "$projectName"
cd "$projectName"

# Initialize npm project
npm init -y

# Install necessary packages
npm install express cookie-parser body-parser nodemon mongoose ejs

# Check if MongoDB is installed
if ! command -v mongod &>/dev/null; then
    echo "MongoDB is not installed. Please install it before proceeding."
    exit 1
fi

# Create a basic index.js template
cat <<EOL > index.js
/**
 * Index.js - Main entry point for the application.
 *
 * This file sets up an Express server, connects to a MongoDB database,
 * and defines several routes demonstrating various request and response methods.
 */

// Import required modules
const express = require('express'); // Express framework
const mongoose = require('mongoose'); // MongoDB ORM
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const cookieParser = require('cookie-parser'); // Middleware for parsing cookies
const path = require('path'); // For handling file and directory paths

// Initialize Express application
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static('public')); // Serve static files (e.g., CSS, JS)

// Set view engine
app.set("view engine", "ejs"); // Use EJS as the templating engine
app.set("views", path.join(__dirname, "views")); // Set views directory

// Database connection
mongoose
  .connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Sample Student Route (for modular routing example)
const studentRouter = express.Router();
studentRouter.get('/', (req, res) => res.send('Student route accessed'));
app.use('/student', studentRouter);

// Admin Route Example
const adminRouter = express.Router();
adminRouter.get('/admin', (req, res) => {
  console.log("Admin area accessed");
  res.send("Welcome to the admin area!");
});
app.use('/admin', adminRouter);

// Various Request Object Example
app.get('/requests_object', (req, res) => {
  const requestData = {
    method: req.method,
    protocol: req.protocol,
    secure: req.secure,
    hostname: req.hostname,
    ip: req.ip,
    accepts: req.accepts(),
    headers: req.headers,
    originalUrl: req.originalUrl,
    path: req.path
  };
  console.log(requestData);
  res.json(requestData);
});

// Response Object Examples
app.get('/response_send', (req, res) => res.send("Response with send"));
app.get('/response_json', (req, res) => res.json({ message: "JSON Response" }));
app.get('/response_status', (req, res) => res.status(201).send("Created"));
app.get('/response_render', (req, res) => res.render("pages/index"));

// CRUD Routes
app.get('/crud', (req, res) => res.send("GET - CRUD"));
app.post('/crud', (req, res) => {
  console.log(req.body);
  res.send("POST - CRUD");
});
app.put('/crud', (req, res) => res.send("PUT - CRUD"));
app.patch('/crud', (req, res) => res.send("PATCH - CRUD"));
app.delete('/crud', (req, res) => res.send("DELETE - CRUD"));

// Modular Routes (examples for scalability)
app.get('/user/:id', (req, res) => res.send(`User ID: ${req.params.id}`));
app.get('/site', (req, res) => res.send(`Query Params: ${JSON.stringify(req.query)}`));

// Start the server
app.listen(port, () => console.log(\`Server is running on port \${port}\`));
EOL

# Create directories for views and public assets
mkdir -p views/pages public

# Add a sample EJS file
cat <<EOL > views/pages/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express Project</title>
</head>
<body>
    <h1>Welcome to the Express Project!</h1>
    <p>This is a sample page rendered using EJS.</p>
</body>
</html>
EOL

# Update package.json to use nodemon for the start script
sed -i 's/"test": "echo \\\"Error: no test specified\\\" && exit 1"/"start": "nodemon index.js"/' package.json

echo "Express project '$projectName' created successfully."
