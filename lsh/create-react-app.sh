#!/bin/bash

# Prompt user for project name
read -p "Enter project name: " projectName

# Create project folder and navigate into it
npx create-react-app "$projectName"
cd "$projectName"

# Update npm and install necessary packages
npm install -g npm@latest
npm install axios@latest react-router-dom@latest prop-types@latest

# Create a basic App.js template
cat <<EOL > src/App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/about" element={<About message="About us page" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About({ message }) {
  return <h2>About: {message}</h2>;
}

About.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
EOL

# Create a basic App.css template
cat <<EOL > src/App.css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 10px;
}
EOL

echo "React project '$projectName' created successfully."
