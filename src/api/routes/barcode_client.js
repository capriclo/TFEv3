const express = require('express');
const router = express.Router();
let mysql = require('mysql');

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


let client;

router.get('/:barcode', (req, res, next) => {
    var barcode = req.params.barcode;
    //var barcodev2 = req.params.barcode;
    console.log('ch3 = ' +barcode);

    barcode = barcode.replace(/\\/g,"\\\\")
    barcode = barcode.replace(/\'/g,"\\'")
    barcode = barcode.replace(/\"/g,"\\\"")

    console.log('ch4 = ' +barcode);

    const quote = "\""; 
    barcode = "" +quote +barcode +quote;
    console.log("barcode " +barcode);
    var sql = 'SELECT * FROM clients WHERE Customer_card = ' +barcode;
    console.log(sql);
        connection.query(sql, function (err, result) {
            console.log(result)
            client = result
          });
          console.log("client" +client)
        res.status(200).json({
            message : 'Bienvenue',
            client : client
         })
         res.end();

})

module.exports = router;