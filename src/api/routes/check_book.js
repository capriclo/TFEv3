const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

//var check_phone;

router.get('/:titre', (req, res, next) => {
    const quote = "\""; 
    const titre = "" +quote +req.params.titre +quote;
    console.log(titre);
    /*var sql = 'SELECT * FROM clients WHERE Phone = ' +phone;
    console.log(sql);
    connection.query(sql, function (err, result) {
        console.log(result)
            if (err) throw err;
            check_phone = result.length;
          });
          console.log(check_phone);*/
        res.status(200).json({
            message : 'Bienvenue', 
            titre: titre
            
         })
})

module.exports = router;