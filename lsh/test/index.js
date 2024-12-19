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
app.get('/user/:id', (req, res) => res.send());
app.get('/site', (req, res) => res.send());

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
