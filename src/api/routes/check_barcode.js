const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

var check_barcode;

router.get('/:barcode', (req, res, next) => {
    var barcode = req.params.barcode;
    console.log('ch1 = ' +barcode);

        barcode = barcode.replace(/\\/g,"\\\\")
        barcode = barcode.replace(/\'/g,"\\'")
        barcode = barcode.replace(/\"/g,"\\\"")

        console.log('ch2 = ' +barcode);
    
    const quote = "\""; 
    barcode = "" +quote +barcode +quote;
    console.log("barcode " +barcode);
   var sql = 'SELECT * FROM books WHERE Barcode = ' +barcode;
    console.log(sql);
        connection.query(sql, function (err, result) {
            console.log(result.length)
            check_barcode = result.length
            console.log(check_barcode)
          });
          console.log(check_barcode);
        res.status(200).json({
            message : 'Bienvenue',
            check_barcode : check_barcode
         })
})

module.exports = router;