// const db = require('../databases/local_database');
const db = require('../databases/docker_database');

const bcrypt = require('bcrypt');


// GET | return all users
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    })
}

// GET | return user by Id
exports.getUserById = (req, res) => {
    const UId = req.params.id;
    const query = "SELECT * FROM users WHERE id = ?";

    if(!UId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(query, [UId], (err, result) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(result);
    }); 
}

// GET | return user by username
exports.getUserByName = (req, res) => {
    const Uname = req.params.name;

    // Check if username is provided
    if (!Uname) {
        return res.status(400).json({ error: 'Username is required' });
    }
    // Example validation for username (length and basic format)
    if (Uname.length > 100) {
        return res.status(400).json({ error: 'Username is too long' });
    }

    // Query to retrieve the user by username
    const query = "SELECT * FROM users WHERE username = ?";

    db.query(query, [Uname], (err, result) => {
        if (err) {
            console.error('Error Querying Database: ' + err.stack);
            return res.status(500).json({ error: 'Error querying database' });
        }

        // Check if a user was found
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user data
        res.json(result[0]);
    });
}

// GET | info needed by User
exports.getAllUsersInfo = (req, res) => {

    const query = "SELECT * FROM users u INNER JOIN info i ON u.id = i.userId"

    db.query(query, (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    })
}

exports.postUser = (req, res) => {
    // If req.body is an array
    const [username, name, afdelingID, password] = req.body;

    // Validate payload
    if (!username || !name || !afdelingID || !password) {
        return res.status(400).json({ message: "Missing or invalid fields" });
    }

    // SQL query
    const query = 'INSERT INTO users (id, username, Name, AfdelingId, password) VALUES (NULL, ?, ?, ?, ?)';
    db.query(query, [username, name, afdelingID, password], (err, result) => {
        if (err) {
            console.error('ERROR querying database: ' + err.stack);
            return res.status(500).send('ERROR Querying database');
        }
        res.json({ message: 'User Added Successfully' });
    });
};

// PUT | Update user
exports.putUser = (req, res) => {
    const UId = req.params.id
    const {username ,Name, AfdelingId } = req.body;
    if(!UId || !Name || !AfdelingId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const query = 'UPDATE users SET username = ?, Name = ?, AfdelingId = ? WHERE id = ?';
    db.query(query, [username,Name, AfdelingId, UId], (err, result) => {
        console.error('ERROR querying database: ' + err.stack);
        res.status(200).send('ERROR Querying database');
        return;
    })
    res.json({message: 'User Update Succesfully'})
}

// POST | Add new User and Info
exports.postUserAndInfo = (req, res) => {
    const [ username, name, afdelingID, password, email, phone, groeps, jaar_leiding, leeftijd ] = req.body;
    // Validate the required fields for both user and info
    if (!username || !name || !afdelingID || !password || !email || !phone || !jaar_leiding || !leeftijd) {
        return res.status(400).json({ message: "Missing or invalid fields" });
    }

    // Insert the user data into the 'users' table
    const userQuery = 'INSERT INTO users (id, username, Name, AfdelingId, password) VALUES (NULL, ?, ?, ?, ?)';
    db.query(userQuery, [username, name, afdelingID, password], (err, userResult) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Error inserting user');
        }

        // Get the userId (auto-generated ID of the newly inserted user)
        const userId = userResult.insertId;

        // Insert the corresponding info data into the 'info' table using the userId
        const query = 'INSERT INTO info (id, userId, email, phone, groeps, jaar_leiding, leeftijd, image) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [userId, email, phone, groeps, jaar_leiding, leeftijd, 'unkown.jpg'], (err, result) => {
            if (err) {
                console.error('Error querying database: ' + err.stack);
                res.status(500).send('Error querying database');
                return;
            }
            res.json({ message: 'Info Added Successfully' });
        });
    });
};

// DELETE | delete a user
exports.deleteUser = (req, res) => {
    const uId = req.params.id;
    if(!uId) {
        return res.status(400).json({error: 'No ID in parameter'});
    }

    const query = "DELETE FROM users WHERE id = ?";

    db.query(query, [uId], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'User Deleted successfully' });
    });
}