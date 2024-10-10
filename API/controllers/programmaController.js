const db = require('../databases/local_database');

// GET | return all Programma
exports.getAllProgramma = (req, res) => {
    db.query('SELECT * FROM programma', (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(results);
    })
}

// GET | return Programma by Id
exports.getProgrammaById = (req, res) => {
    const Id = req.params.id;
    const query = "SELECT * FROM programma WHERE id = ?";

    if(!Id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(query, [Id], (err, result) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(result);
    }); 
}

// GET | Return all data per afdeling
exports.getProgrammaPerAfdeling = (req, res) => {
    const Id = req.params.id;

    if(!Id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = "SELECT p.* FROM programma p INNER JOIN ( SELECT afdelingId, MIN(ABS(DATEDIFF(datum, CURDATE()))) AS min_diff FROM programma GROUP BY afdelingId ASC) AS closest ON p.afdelingId = closest.afdelingId AND ABS(DATEDIFF(p.datum, CURDATE())) = closest.min_diff ORDER BY p.afdelingId ASC;";

    db.query(query, [Id], (err, result) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(result);
    }); 
}

// GET | Nearest programmas
exports.getClosestAfdeling = (req, res) => {
    const query = "SELECT * FROM programma ORDER BY ABS(DATEDIFF(CURRENT_DATE, datum)) LIMIT 12"
    db.query(query, (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json(result)
    });
}

// POST | Add new Blog post
exports.postProgramma = (req, res) => {
    const { afdelingId, programma, datum } = req.body;
    if(!afdelingId || !programma || !datum ) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO programma (id, afdelingId, programma, datum) VALUES (NULL, ?, ?, ?)';

    db.query(query, [afdelingId, programma, datum], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Programma Added Succesfully' });
    });
}

exports.putProgramma = (req, res) => {
    const { afdelingId, programma, datum } = req.body;
    const pId = req.params.id
    if(!pId || !afdelingId || !programma || !datum ) {
        return res.status(400).json({ error: 'All fields are required' });
    }


    const query = 'UPDATE programma SET AfdelingId = ?, Programma = ?, Datum = ? WHERE id = ?';

    db.query(query, [afdelingId, programma, datum, pId], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(200).send('ERROR Querying database');
            return;         
        }
    })
    res.json({message: 'Programma Update Succesfully'})


}

// DELETE | delete a Programma
exports. deleteProgramma = (req, res) => {
    const Id = req.params.id;
    if(!Id) {
        return res.status(400).json({error: 'No ID in parameter'});
    }
    const query = 'DELETE FROM programma WHERE id = ?';

    db.query(query, [Id], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Programma Deleted successfully' });
    });
}




// test
exports.getTest = (req, res) => {
    db.query('SELECT * FROM programma', (err, results) => {
        if(err) {
            console.error('Error Querying Database: ' + err.stack);
            res.status(500).send('Erro Querying Database');
            return;
        }
        res.json(results);
    })
}