// Import the required modules
const express = require('express'); // Express framework for building the server
const dotenv = require('dotenv'); // dotenv package to load environment variables from a .env file
const bodyParser = require('body-parser'); // Middleware for parsing request bodies

// Load environment variables from the .env file
dotenv.config();

// Create an instance of an Express application
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route for the root URL ("/")
// When a GET request is made to this URL, send a welcome message as the response
app.get('/', (req, res) => {
    res.send('Welcome to our server!'); // Send a welcome message
});

// Set the server port from an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log a message indicating the server is running
    console.log(`Server is running on port ${PORT}`);
});
