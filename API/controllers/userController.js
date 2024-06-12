const db = require('../databases/local_database');

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
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(result);
    }); 
}

// GET | return user by username
exports.getUserByName = (req, res) => {
    const Uname = req.params.name;
    const query = "SELECT * FROM users WHERE username = ?";

    if(!Uname) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(query, [Uname], (err, result) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(result);
        console.log(result);
    }); 
}

// GET | info needed by User
//TODO ADD INNER JOIN
exports.getAllUsersInfo = (req, res) => {
    console.log("getAllUsersInfo");

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


// POST | Add new Blog post
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


// PUT | Add new user
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