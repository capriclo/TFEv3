const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tfe'
});

var check_book_code;

router.get('/:book_code', (req, res, next) => {
    const quote = "\""; 
    const book_code = "" +quote +req.params.book_code +quote;
    console.log("book_code " +book_code);
   var sql = 'SELECT * FROM books WHERE Book_code = ' +book_code;
   console.log(sql);
        connection.query(sql, function (err, result) {
            console.log(result.length)
            check_book_code = result.length
            console.log(check_book_code)
          });
          console.log(check_book_code);
        res.status(200).json({
            message : 'Bienvenue',
            check_book_code : check_book_code
         })
})

module.exports = router;