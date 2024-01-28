const db = require('../databases/local_database');

// GET All programmas
exports.getAllProgrammas = (req, res) => {
    db.query('SELECT * FROM programma', (err, results) => {
        if (err) { 
          console.error('Error querying database: ' + err.stack);
          res.status(500).send('Error querying database');
          return;
        }
        res.json(results);
      });
}

// GET programma by id
exports.getProgrammaById = (req, res) => {
    const pId = req.params.id;
            
    if (!pId) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    const query = "SELECT * FROM programma WHERE id = ?";
    
    db.query(query, [pId], (err, results) => {
        if(err) {
            console.error('ERROR Querying databse: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    });
} 