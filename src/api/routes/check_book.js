const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

var check_book=0;
var book;

router.get('/:titre', (req, res, next) => {
    const quote = "\""; 
    const titre = "" +quote +req.params.titre +quote;
    console.log(titre);
    var sql = 'SELECT * FROM books WHERE Title = ' +titre;
    console.log(sql);
    connection.query(sql, function (err, result) {
            console.log(result)
            if (err) throw err;
            book = result;
            console.log(check_book);
            console.log(book)
          });
        res.status(200).json({
            message : 'Bienvenue',
            book: book, 
         })
        // check_book: check_book  
})

module.exports = router;