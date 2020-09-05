const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let allclients;
let client;

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


router.get('/', (req, res, next)=> {
    connection.query("SELECT * FROM clients", function (err, result) {

        if (err) throw err;
        console.log(result);
        allclients = result;
    
      });
      console.log(allclients);
    res.status(200).json({
        clients : allclients
    })
    console.log(allclients);
})

router.post('/', (req, res, next)=> {
    const client = {
        name: req.body.name, 
        first_name : req.body.first_name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    };
    res.status(200).json({
        message: 'Handling POST request to /clients',
        createdClient: client 
    })

    var data = [client.name, client.first_name, client.address, client.email, client.phone]

    console.log(data);

    connection.query("INSERT INTO clients SET Name=?, FirstName=?, Address=?, Email=?, Phone=? ", data, (err, client, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })


    
})

router.get('/:clientID', (req, res, next) => {
    const id = req.params.clientID;
    var sql = 'SELECT * FROM clients WHERE IDclients = ' +id;
        connection.query(sql, function (err, result) {

            if (err) throw err;
            client = result;
          });
        res.status(200).json({
            message : 'Bienvenue',
            client : client
        })
})



router.patch('/:clientID', (req, res, next) => {
    res.status(200).json({
        message : 'Updated product'
    })
})

router.delete('/:clientID', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product'
    })
})

module.exports = router;