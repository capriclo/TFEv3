const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

var check_archived_client;

router.get('/IDclients', (req, res, next) => {
    const quote = "\""; 
    const IDclients = "" +quote +req.params.IDclients +quote;
    console.log(IDclients);
   var sql = 'SELECT * FROM archived_clients WHERE IDclients = ' +IDclients;
   console.log(sql);
        connection.query(sql, function (err, result) {
            check_archived_client = result.length
          });
          console.log(check_archived_client)
        res.status(200).json({
            message : 'Bienvenue',
            check_archived_client : check_archived_client
         })
})

module.exports = router;