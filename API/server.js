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
const infoRoutes = require('./routes/infoRoutes');
const afdelingRoutes = require('./routes/afdelingRoutes');
const verhuurRoutes = require('./routes/verhuurRoutes');
const programmaRoutes = require('./routes/programmaRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const goepieRoutes = require('./routes/goepieRoute');

// Use Route Files
app.use('/api', blogRoutes);
app.use('/api', userRoutes);
app.use('/api', infoRoutes);
app.use('/api', afdelingRoutes);
app.use('/api', verhuurRoutes);
app.use('/api', programmaRoutes);
app.use('/api', categoryRoutes);
app.use('/api', goepieRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});