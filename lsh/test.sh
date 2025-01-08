#!/bin/bash

# Prompt user for project name
read -p "Enter project name: " projectName

# Create project folder and navigate into it
mkdir "$projectName"
cd "$projectName"

# Initialize npm project
npm init -y

# Install necessary packages
npm install express cookie-parser body-parser nodemon mongoose ejs mysql2 pg

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
app.listen(port, () => console.log(\`Server is running on port \${port}\`));
EOL

# Create directories for views and public assets
mkdir -p views/pages public views/includes

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
    <%- include('includes/header') %>
    <h1>Welcome to the Express Project!</h1>
    <p>This is a sample page rendered using EJS.</p>
    <%- include('includes/footer') %>
</body>
</html>
EOL

# Add header and footer templates
cat <<EOL > views/includes/header.ejs
<header>
    <h2>Header Template</h2>
</header>
EOL

cat <<EOL > views/includes/footer.ejs
<footer>
    <p>Footer Template</p>
</footer>
EOL

# Create a help note in Markdown format
cat <<EOL > public/${projectName}_help.md
# ${projectName} Project Help

## Overview
This project sets up a basic Express.js server with connections to MongoDB, MySQL, and PostgreSQL databases. It includes middleware for parsing request bodies, cookies, and serving static files. The project also uses EJS as the templating engine.

## Project Structure
\`\`\`
${projectName}/
├── index.js
├── package.json
├── public/
│   └── ${projectName}_help.md
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── header.ejs
│   └── pages/
│       └── index.ejs
└── node_modules/
\`\`\`

## Getting Started
1. Ensure MongoDB, MySQL, and PostgreSQL are installed and running on your local machine.
2. Run the following command to start the server:
\`\`\`
npm start
\`\`\`
3. Open your browser and navigate to \`http://localhost:3000\`.

## Routes
- \`/\`: Main route displaying a simple welcome message.
- \`/student\`: Sample student route.
- \`/admin\`: Admin area route.
- \`/requests_object\`: Demonstrates various request object properties.
- \`/response_send\`, \`/response_json\`, \`/response_status\`, \`/response_render\`: Demonstrate various response methods.
- \`/crud\`: CRUD routes for basic operations.

## Database Connections
### MongoDB
Connection details for MongoDB are specified in the \`index.js\` file. Ensure MongoDB is running on \`localhost:27017\` and replace \`mydatabase\` with your database name.

### MySQL
Connection details for MySQL are specified in the \`index.js\` file. Replace \`your_mysql_user\`, \`your_mysql_password\`, and \`your_mysql_database\` with your MySQL credentials.

### PostgreSQL
Connection details for PostgreSQL are specified in the \`index.js\` file. Replace \`your_pg_user\`, \`your_pg_password\`, and \`your_pg_database\` with your PostgreSQL credentials.

## Template Files
- \`views/pages/index.ejs\`: Sample EJS file with header and footer includes.
- \`views/includes/header.ejs\`: Header template.
- \`views/includes/footer.ejs\`: Footer template.

## Additional Notes
- Use `nodemon` to automatically restart the server when changes are detected.
- Ensure to install any required database drivers or dependencies if not already included.

Enjoy building your Express project!
EOL

# Update package.json to use nodemon for the start script
sed -i 's/"test": "echo \\"Error: no test specified\\" && exit 1"/"start": "nodemon index.js"/' package.json

echo "Express project '$projectName' created successfully."
