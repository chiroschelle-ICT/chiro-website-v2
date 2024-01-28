const db = require('../databases/local_database');

// GET All Afdelingen
exports.getAllAfdelingen = (req, res) => {
    db.query('SELECT * FROM afdeling', (err, results) => {
        if (err) { 
          console.error('Error querying database: ' + err.stack);
          res.status(500).send('Error querying database');
          return;
        }
        res.json(results);
      });
}

// GET Afdeling by id
exports.getAfdelingById = (req, res) => {
    const aId = req.params.id;
            
    if (!aId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    const query = "SELECT * FROM afdeling WHERE id = ?";
    
    db.query(query, [pId], (err, results) => {
        if(err) {
            console.error('ERROR Querying databse: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    });
} 