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
        return res.status(400).json({ error: 'All fields are required' });
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
    console.log("Hello")
    console.log(req.body)
    const { title, description, userId, Image, category, Link, HasLink, timePosted } = req.body;
/*     if (!title  || !description  || !userId || !Image || !category) {
        return res.status(400).json({ error: 'All fields are required' });
    } */
    console.log(req.body)

    const query = 'INSERT INTO blogposts (id, title, description, userId, Image, category, Link, HasLink, timePosted) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [title, description, userId, Image, category, Link, HasLink, timePosted], (err, results) => { 
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Blogpost created successfully' });
    });
};

// PUT Update BLog post
exports.putBlogPost = (req, res) => {
    const bpId = req.params.id;
    const { title, description, userId, Image } = req.body;
    const query = 'UPDATE blogposts SET title = ?, description = ?, userId = ?, Image = ? WHERE id = ?';
    
    if (!title || !description || !userId || !Image || !bpId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(query, [title, description, userId, Image, bpId], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Blogpost Updated successfully' });
    });    
};

// DELETE blogpost
exports.deleteBlogPost = (req, res) => {
    const bpId = req.params.id;
    if(!bpId) {
        return res.status(400).json({error: 'No ID in parameter'});
    }
    const query = 'DELETE FROM blogposts WHERE id = ?';

    db.query(query, [bpId], (err, results) => {
        if(err) {
            console.error('ERROR querying database: ' + err.stack);
            res.status(500).send('ERROR Querying Database');
            return;
        }
        res.json({ message: 'Blogpost Deleted successfully' });
    });

};

