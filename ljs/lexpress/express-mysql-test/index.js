const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hvenkatraman',        // Your MySQL username
    password: 'Venkat',        // Your MySQL password
    database: 'SchoolDb' // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Could not connect to MySQL:', err);
        process.exit(1);
    } else {
        console.log('Connected to MySQL database successfully');
    }
});

// Create `student` table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
)`;
db.query(createTableQuery, (err) => {
    if (err){
        console.error('Error creating student')}
    else{
        console.log('Table created sucessfully')}

    }
)
