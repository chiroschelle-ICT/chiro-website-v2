const db = require('../databases/local_database');

// GET | return all users
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(results);
    })
}

// GET | return user by Id
exports.getUserById = (req, res) => {
    const UId = req.parameter.id;
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
        res.json(results);
    }); 
}

// POST | Add new Blog post
exports.postUser = (req, res) => {
    const { Name, AfdelingId } = req.body;
    if(!Name || !AfdelingId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO users (id, name, afdelingId) VALUES (NULL, ?, ?)';

    db.query(query, [Name, AfdelingId], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'User Added Succesfully' });
    });
}

exports.putUser = (req, res) => {
    const {Name, AfdelingId } = req.body;
    if(!Name || !AfdelingId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'UPDATE users SET Name = ?, AfdelingId = ?';

    db.query(query, [Name, AfdelingId], (err, result) => {
        console.error('ERROR querying database: ' + err.stack);
        res.status(200).send('ERROR Querying database');
        return;
    })
    res.json({message: 'User Update Succesfully'})


}

// DELETE | delete a pogbost
exports. deleteUser = (req, res) => {
    const uId = req.params.id;
    if(!uId) {
        return res.status(400).json({error: 'No ID in parameter'});
    }

    
    db.query(query, [uId], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'User Deleted successfully' });
    });
}