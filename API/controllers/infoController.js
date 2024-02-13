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
    const Id = req.parameter.id;
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

// POST | Add new Blog post
exports.postInfo = (req, res) => {
    const { AfdelingId, Email, Phone, Groeps, Jaar_Leiding, Leeftijd } = req.body;
    if(!AfdelingId || !Email || !Phone || !Groeps || !Jaar_Leiding || !Leeftijd) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO info (id, name, afdelingId) VALUES (NULL, ?, ?)';

    db.query(query, [AfdelingId, Email, Phone, Groeps, Jaar_Leiding, Leeftijd], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Info Added Succesfully' });
    });
}

exports.putInfo = (req, res) => {
    const { AfdelingId, Email, Phone, Groeps, Jaar_Leiding, Leeftijd } = req.body;
    if(!AfdelingId || !Email || !Phone || !Groeps || !Jaar_Leiding || !Leeftijd) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'UPDATE info SET Name = ?, AfdelingId = ?';

    db.query(query, [AfdelingId, Email, Phone, Groeps, Jaar_Leiding, Leeftijd], (err, result) => {
        console.error('ERROR querying database: ' + err.stack);
        res.status(200).send('ERROR Querying database');
        return;
    })
    res.json({message: 'info Update Succesfully'})


}

// DELETE | delete a pogbost
exports. deleteInfo = (req, res) => {
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