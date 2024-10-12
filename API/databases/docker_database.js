const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
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
