/**
 * Index.js - Main entry point for the application.
 *
 * This file sets up an Express server, connects to various databases,
 * and defines several routes demonstrating various request and response methods.
 */

// Import required modules
const express = require('express'); // Express framework
const mongoose = require('mongoose'); // MongoDB ORM
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const cookieParser = require('cookie-parser'); // Middleware for parsing cookies
const path = require('path'); // For handling file and directory paths
const mysql = require('mysql2'); // MySQL client
const { Pool } = require('pg'); // PostgreSQL client

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

// Database connections

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// MySQL connection
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database'
});
mysqlConnection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// PostgreSQL connection
const pgPool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'your_pg_database',
  password: 'your_pg_password',
  port: 5432
});
pgPool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Could not connect to PostgreSQL:', err));

// Sample Route
app.get('/', (req, res) => res.send('Hello World'));

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
