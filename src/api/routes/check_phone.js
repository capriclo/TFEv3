const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

var check_phone;

router.get('/:phone', (req, res, next) => {
    const quote = "\""; 
    const phone = "" +quote +req.params.phone +quote;
    console.log(phone);
   var sql = 'SELECT * FROM clients WHERE Phone = ' +phone;
        connection.query(sql, function (err, result) {
        if (err) throw err;
            check_phone = result.length;
          });
        res.status(200).json({
            message : 'Bienvenue',
            check_phone : check_phone
         })
})

module.exports = router;