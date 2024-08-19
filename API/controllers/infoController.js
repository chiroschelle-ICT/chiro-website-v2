const db = require('../databases/local_database');

// GET | return all Info
exports.getAllInfo = (req, res) => {

    db.query('SELECT * FROM Info', (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return; 
        }
        res.json(results);
    })
}

// GET | return Info by Id
exports.getInfoById = (req, res) => {
    const Id = req.params.id;
    const query = "SELECT * FROM info WHERE id = ?";

    if(!Id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(query, [Id], (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(results);
    }); 
}
// GET | return Info By userId
exports.getInfoByUserId = (req, res) => {
    const userId = req.params.id;
    const query = "SELECT * FROM info WHERE userId = ?";

    if(!userId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(query, [userId], (err, results) => {
        if(err) {
            console.error('Erro Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(results);
    });
}



// POST | Add new Info
exports.postInfo = (req, res) => {
    const { userId ,afdelingId, email, phone, groeps, jaar_leiding, leeftijd } = req.body;
    if(!userId || !afdelingId || !email || !phone || !jaar_leiding || !leeftijd) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO info (id ,userId, afdelingId, email, phone, groeps, jaar_leiding, leeftijd) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [userId, afdelingId, email, phone, groeps, jaar_leiding, leeftijd], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Info Added Succesfully' });
    });
}

// PUT | Update info box
exports.putInfo = (req, res) => {
    const Id = req.params.id;
    const { userId ,afdelingId, email, phone, groeps, jaar_leiding, leeftijd } = req.body;
    if(!Id || !userId || !afdelingId || !email || !phone || !jaar_leiding || !leeftijd) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'UPDATE info SET userId = ?, afdelingId = ?, email = ?, phone = ?, groeps = ?, jaar_leiding = ?, leeftijd = ? WHERE id = ?';

    db.query(query, [userId, afdelingId, email, phone, groeps, jaar_leiding, leeftijd, Id ], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({message: 'info Update Succesfully'})
    })


}

// DELETE | delete a info box
exports.deleteInfo = (req, res) => {
    const Id = req.params.id;
    if(!Id) {
        return res.status(400).json({error: 'No ID in parameter'});
    }
    const query = 'DELETE FROM info WHERE id = ?';

    db.query(query, [Id], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Info Deleted successfully' });
    });
}