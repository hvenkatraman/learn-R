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

# Create a more comprehensive index.js template
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
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Data array for demonstration
let items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
];

// Routes

// GET: Render a dynamic page with EJS
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', items });
});

// POST: Add a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const newItem = { id: items.length + 1, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET: Retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET: Retrieve a single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// PUT: Update an existing item by ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name, description } = req.body;
  item.name = name || item.name;
  item.description = description || item.description;

  res.json(item);
});

// DELETE: Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

// Middleware to handle 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
EOL

# Create EJS templates
mkdir views
cat <<EOL > views/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
</head>
<body>
  <h1>Welcome to <%= title %></h1>
  <ul>
    <% items.forEach(item => { %>
      <li>
        <strong><%= item.name %></strong>: <%= item.description %>
      </li>
    <% }) %>
  </ul>
  <form action="/items" method="POST">
    <input type="text" name="name" placeholder="Item Name" required>
    <input type="text" name="description" placeholder="Item Description" required>
    <button type="submit">Add Item</button>
  </form>
</body>
</html>
EOL

cat <<EOL > views/404.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
</head>
<body>
  <h1><%= title %></h1>
  <p>The page you are looking for does not exist.</p>
</body>
</html>
EOL

# Edit package.json to use nodemon
sed -i 's/"test": "echo \\\"Error: no test specified\\\" && exit 1"/"start": "nodemon index.js"/' package.json

echo "Express project '$projectName' created successfully."
