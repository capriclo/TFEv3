const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let allbooks;

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
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
    const id = req.params.bookID;
    sql = 'SELECT * FROM books WHERE idbooks = ' +id;
        connection.query(sql, function (err, result) {
            console.log(result);
            if (err) throw err;
            book = result;
          });
          console.log(book)
        res.status(200).json({
            message : 'Bienvenue',
            book : book
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