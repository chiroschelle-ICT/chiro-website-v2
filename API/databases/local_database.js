const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chiro_website_v2',
    waitForConnections: true,
});

// Check for connection pool errors
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + connection.threadId);
    connection.release();  // Release the connection back to the pool
});

module.exports = db;
