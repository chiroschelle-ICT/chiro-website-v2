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


// POST | Add new User post
exports.postUsers = (req, res) => {
    const users = req.body; // Assuming req.body is the array of users
    if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ error: 'No users provided' });
    }

    // Iterate over the array of users
    users.forEach(user => {
        const { Name, AfdelingId } = user;
        if (!Name || !AfdelingId) {
            console.error('Skipping user: Missing required fields');
            return; // Skip this user and continue with the next one
        }

        const query = 'INSERT INTO users (id, Name, AfdelingId) VALUES (NULL, ?, ?)';
        db.query(query, [Name, AfdelingId], (err, result) => {
            if (err) {
                console.error('ERROR querying database: ' + err.stack);
                // Continue with the next user even if an error occurs
                return;
            }
        });
    });

    res.json({ message: 'Users added successfully' });
};

exports.postUser = (req, res) => {
    const {username, name, afdelingID, password} = req.body

    const query = 'INSERT INTO users (id, username, Name, AfdelingId, password) VALUES (NULL, ?, ?, ?, ?)';
    db.query(query, [username, name, afdelingID, password], (err, res) => {
        console.error('ERROR querying database: ' + err.stack);
        res.status(200).send('ERROR Querying database');
        return res;
    })
    res.json({message: 'User Added Succesfully'})

    
}


// PUT | Update user
exports.putUser = (req, res) => {
    const UId = req.params.id
    const {Name, AfdelingId } = req.body;
    if(!UId || !Name || !AfdelingId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const query = 'UPDATE users SET Name = ?, AfdelingId = ? WHERE id = ?';
    db.query(query, [Name, AfdelingId, UId], (err, result) => {
        console.error('ERROR querying database: ' + err.stack);
        res.status(200).send('ERROR Querying database');
        return;
    })
    res.json({message: 'User Update Succesfully'})
}

// POST | Add new users
exports.postUsers = (req, res) => {
    const users = req.body; // Assuming req.body is an array of user objects

    // Check if the body contains an array of users
    if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ error: 'No users provided' });
    }

    let validUsers = [];
    let invalidUsers = [];

    // Validate each user object
    users.forEach(user => {
        const { Name, AfdelingId } = user;

        // Basic validation
        if (typeof Name !== 'string' || Name.trim() === '' || typeof AfdelingId !== 'number') {
            invalidUsers.push(user);
            console.error('Skipping user due to invalid data:', user);
            return; // Skip this user and continue with the next one
        }

        // Additional validation for Name length
        if (Name.length > 100) {
            invalidUsers.push(user);
            console.error('Skipping user due to Name length issue:', user);
            return; // Skip this user and continue with the next one
        }

        validUsers.push(user);
    });

    // If no valid users, respond with error
    if (validUsers.length === 0) {
        return res.status(400).json({ error: 'All provided users are invalid' });
    }

    // Insert valid users into the database
    let insertedCount = 0;

    validUsers.forEach(user => {
        const { Name, AfdelingId } = user;
        const query = 'INSERT INTO users (id, Name, AfdelingId) VALUES (NULL, ?, ?)';

        db.query(query, [Name, AfdelingId], (err, result) => {
            if (err) {
                console.error('ERROR querying database: ' + err.stack);
                return;
            }
            insertedCount++;
            // Check if all valid users have been inserted
            if (insertedCount === validUsers.length) {
                res.json({ message: 'Users added successfully', inserted: validUsers.length, failed: invalidUsers.length });
            }
        });
    });

    // If there were valid users but none were inserted (e.g., due to connection issues)
    if (validUsers.length > 0 && insertedCount === 0) {
        res.status(500).json({ message: 'Error occurred while inserting users', failed: invalidUsers.length });
    }
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