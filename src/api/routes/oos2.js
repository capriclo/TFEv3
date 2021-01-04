const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let sellings;

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tfe'
});


router.get('/', (req, res, next)=> {
    console.log ('oos2');
    connection.query("SELECT * FROM sellings", function (err, result) {
        if (err) throw err;
        console.log(result);
        sellings = result;
    
      });
      console.log("sellings " +JSON.stringify(sellings));
    res.status(200).json({
        sellings : sellings
    })
    console.log(sellings);
})



module.exports = router;