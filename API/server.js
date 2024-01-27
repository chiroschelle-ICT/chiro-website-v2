const express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;

// Configure body-parser to handle JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Import Route Files
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Route Files
app.use('/api', blogRoutes);
app.use('/api', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});