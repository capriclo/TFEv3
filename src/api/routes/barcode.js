const express = require('express');
const router = express.Router();
let mysql = require('mysql');

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


let book;

router.get('/:barcode', (req, res, next) => {
    const quote = "\""; 
    const barcode = "" +quote +req.params.barcode +quote;
    console.log(barcode);
   var sql = 'SELECT * FROM books WHERE Barcode = ' +barcode;
   console.log(sql);
        connection.query(sql, function (err, result) {
            console.log(result)
            book = result
          });
          console.log("book" +book)
        res.status(200).json({
            message : 'Bienvenue',
            book : book
         })
})

module.exports = router;