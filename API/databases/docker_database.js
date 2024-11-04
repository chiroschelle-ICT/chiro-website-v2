const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'chiro-db-v1', // Use the service name defined in docker-compose
    user: 'root',
    password: 'password',
    database: 'chiroDb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Function to connect with retry
const connectWithRetry = (retries = 5) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the DOCKER database: ' + err.stack);
            if (retries > 0) {
                console.log(`Retrying... (${5 - retries + 1})`);
                setTimeout(() => connectWithRetry(retries - 1), 2000); // Wait 2 seconds before retry
            }
            return;
        }
        console.log('Connected to the LDOCKER database as ID ' + connection.threadId);
        connection.release();
    });
};

// Start the connection
connectWithRetry();

module.exports = db;
