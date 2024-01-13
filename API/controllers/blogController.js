const db = require('../databases/local_database');

// GET All Blog Posts
exports.getAllBlogPosts = (req, res) => {
    db.query('SELECT * FROM blogposts', (err, results) => {
      if (err) {
        console.error('Error querying database: ' + err.stack);
        res.status(500).send('Error querying database');
        return;
      }
      res.json(results);
    });
};

// GET Blog Post by Id
exports.getBlogPostById =  (req, res) => {
    const bpId = req.params.id;
    if (!bpId) {
        return res.status(400).send('Missing required parameter: blogpost Id');
    }
    const query = "SELECT * FROM blogposts WHERE id = ?";
    
    db.query(query, [bpId], (err, results) => {
        if(err) {
            console.error('ERROR Querying databse: ' + err.stack);
            res.status(500).send('Error Querying Database');
            return;
        }
        res.json(results);
    });
};

// POST Add new Blog Post
exports.postBlogPost = (req, res) => {
    const { title, description, userId, Image } = req.body;
    const query = 'INSERT INTO blogposts (id, title, description, userId, Image) VALUES (NULL, ?, ?, ?, ?)';
    db.query(query, [title, description, userId, Image], (err, results) => { 
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'User created successfully' });
    });
};

// PU Update BLog post
exports.putBlogPOst = (req, res) => {
    const blogId = req.params.id;
    const { title, description, userId, Image } = req.body;

};

