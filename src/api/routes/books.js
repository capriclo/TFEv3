const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let allbooks;

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

//Handle incomming GET request to /oders
router.get('/', (req, res, next)=> {
    connection.query("SELECT * FROM books", function (err, result) {
        if (err) throw err;
        console.log(result);
        allbooks = result;
    
      });
      console.log(allbooks);
    res.status(200).json({
        books : allbooks
    })
    console.log(allbooks);
})


router.get('/:bookID', (req, res, next)=> {
    res.status(200).json({
        message : 'Book details',
        bookID : req.params.bookID
    })
    res.end();
})

/*router.deleted('/:bookID', (req, res, next)=> {
    res.status(200).json({
        message : 'Book deleted',
        bookID : req.params.bookID
    })
})*/


module.exports = router;