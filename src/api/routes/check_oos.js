const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tfe'
});

//var check_archived_client;

router.get('/idbooks', (req, res, next) => {
    console.log("________________________________________________________________________________________");
    const quote = "\""; 
    const idbooks = "" +quote +req.params.idbooks +quote;
    //console.log(idbooks);
   /*var sql = 'SELECT * FROM archived_clients WHERE IDclients = ' +IDclients;
   console.log(sql);
        connection.query(sql, function (err, result) {
            check_archived_client = result.length
          });
          console.log(check_archived_client)
        res.status(200).json({
            message : 'Bienvenue',
            check_archived_client : check_archived_client
         })*/
         
})

module.exports = router;