// Create web server

const express = require('express');
const app = express();
const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));
// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Middleware to handle 404 errors      
app.use((req, res) => {
  res.status(404).send('Sorry, that route does not exist.');
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
