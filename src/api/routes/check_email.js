const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tfe'
});

var check_mail;

router.get('/:email', (req, res, next) => {
    const quote = "\""; 
    const email = "" +quote +req.params.email +quote;
    console.log(email);
   var sql = 'SELECT * FROM clients WHERE Email = ' +email;
   console.log(sql);
        connection.query(sql, function (err, result) {
            check_mail = result.length
          });
          console.log(check_mail)
        res.status(200).json({
            message : 'Bienvenue',
            check_mail : check_mail
         })
})

module.exports = router;