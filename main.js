const express = require('express');
const cors = require('cors');
const authUtils = require('./utils/authutils.js');

// Create an Express application
const app = express();
const port = 5000;

// By adding CORS(app), you are telling express to include CORS headers in responses. The cors() extension will add headers such as Access-Control-Allow-Origin: *, allowing requests from any origin.
//This way, when your frontend makes requests to your nodeJS server, the server will respond with the appropriate CORS headers, and the browser will permit the requests. Since the frontend and backend are on the same origin (domain), you won't encounter CORS issues.
//For more info on CORS goto: https://www.bannerbear.com/blog/what-is-a-cors-error-and-how-to-fix-it-3-ways/
// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the authUtils router for the '/getToken' route
app.use('/getToken', authUtils);

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
