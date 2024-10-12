// const db = require('../databases/local_database');
const db = require('../databases/docker_database');

// GET all verhuur items
exports.getAllVerhuur = (req, res) => {
    db.query('SELECT * FROM verhuur', (err, results) => {
        if(err) {
            console.error('Error querying database: ' + err.stack);
            res.status(500).send('Error querying database');
            return;
        }
        res.json(results);
    });
};

// GET verhuur item by id
exports.getVerhuurById = (req, res) => {
    const vId = req.params.id;

    if(!vId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = "SELECT * FROM verhuur WHERE id = ?";

    db.query(query, [vId], (err, results) => {
        if(err) {
            console.err('ERROR Querying database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    });
};

// POST verhuur item
exports.postVerhuur = (req, res) => {
    const { item, prijs, waarborg, userId } = req.body;

    if(!item || !prijs || !waarborg || !userId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO verhuur (id, item, prijs, waarborg, userId) VALUES (NULL, ?, ?, ?, ?)';

    db.query(query, [item, prijs, waarborg, userId], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Verhuur item created successfully' });
    });
};

// PUT verhuur item
exports.putVerhuur = (req, res) => {
    const vId = req.params.id;
    const { item, prijs, waarborg, userId } = req.body;

    if(!vId || !item || !prijs || !waarborg || !userId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'UPDATE verhuur SET item = ?, prijs = ?, waarborg = ?, userId = ? WHERE id = ? ';

    db.query(query, [item, prijs, waarborg, userId, vId], (err, results) => {
        if(err) {
            console.err('ERROR Querying database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    });
};

// DELETE verhuur item
exports.deleteVerhuur = (req, res) => {
    const vId = req.params.id;
    
    if(!vId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'DELETE FROM verhuur WHERE id = ?';

    db.query(query, [vId], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'VErhuur Item Deleted successfully' });
    });
};

