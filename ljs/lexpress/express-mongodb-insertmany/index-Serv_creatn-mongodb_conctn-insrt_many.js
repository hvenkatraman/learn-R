const express = require('express');
const mongoDb = require('mongodb');

const app = express();
const connectionUrl = "mongodb://localhost:27017";
const dbName = 'SchoolDb2'; // Correctly initialize the database name as a string

const client = new mongoDb.MongoClient(connectionUrl);
let student2; // Declare the collection variable globally

(async () => {
  try {
    // Establish connection
    await client.connect();
    console.log('MongoDB connection established successfully');

    // Check if the database exists
    const databases = await client.db().admin().listDatabases();
    const databaseExists = databases.databases.some(db => db.name === dbName);

    if (databaseExists) {
      console.log(`Database Name: "${dbName}" exists. Using it.`);
    } else {
      console.log(`Database Name: "${dbName}" does not exist. Creating it right now.`);
    }

    // Initialize the collection
    const db = client.db(dbName);
    student2 = db.collection('student2');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if there is an error
  }
})();

// Endpoint to add students
app.post('/school2', (req, res) => {
  student2.insertMany([
    { name: 'Venkat', email: "hvenkatraman@gmail.com", dept: 'CS' },
    { name: 'Venkat9', email: "hvenkatraman@gmail9.com", dept: 'CS9' },
  ])
    .then(() => res.status(201).send('Two students added successfully'))
    .catch((error) => {
      console.error('Error inserting data:', error.message);
      res.status(500).send(error.message);
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Express server started successfully on port 3000');
});
