const db = require("../databases/local_database");

exports.getCategory = (req, res) => {
    db.query('SELECT * FROM category', (err, results) => {
        if (err) { 
          console.error('Error querying database: ' + err.stack);
          res.status(500).send('Error querying database');
          return;
        }
        res.json(results);
      });
}

exports.getCategoryById = (req, res) => {
    const Id = req.params.id;
    const query = "SELECT * FROM category WHERE id = ?";

    db.query(query, [Id], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json(results);
    });
}