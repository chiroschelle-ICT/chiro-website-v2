const db = require("../databases/local_database");

exports.getGoepie = (req, res) => {
    db.query("SELECT * FROM goepie", (err, result) => {
        if(err) {
            console.error('Error querying database: ' + err.stack);
            res.status(500).send('Error querying database');
            return;
        }
        res.json(result);
    });
}

// Add new Goepie
exports.postGoepie = (req, res) => {
    const { location, active } = req.body;
    const query = 'INSERT INTO goepie (id, location, active) VALUES (NULL, ?, ?)';

    db.query(query, [location, active], (err, result) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({message: 'Goepie Added Succesfully'})
    })
}