#!/bin/bash

# Ask for the project name
echo "Enter the project name:"
read project_name

# Create the React project using create-react-app
npx create-react-app "$project_name"

# Change directory to the project folder
cd "$project_name" || exit

# Update package.json to set react and react-dom versions to 18.2
sed -i 's/"react": ".*"/"react": "18.2.0"/' package.json
sed -i 's/"react-dom": ".*"/"react-dom": "18.2.0"/' package.json

# Remove node_modules folder and package-lock.json
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Install missing web-vitals package
npm install web-vitals

echo "Project setup complete and configured for Termux!"
