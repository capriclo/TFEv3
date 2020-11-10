const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let allbooks;
let data;
let sql;

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

  router.post('/', (req,res, next)=> {
        console.log('.................................................................................................');
        console.log(req.body);
        console.log(req.body.client[0].Name);
        const client = {
            IDclients: req.body.client[0].IDclients,
            Name: req.body.client[0].Name, 
            FirstName : req.body.client[0].FirstName,
            Address: req.body.client[0].Address,
            Email: req.body.client[0].Email,
            Phone: req.body.client[0].Phone
        };
    console.log('const client' +client)
    
    res.status(200).json({
        message: 'Handling POST request to /clients',
        createdClient: client 
    })

    data = [client.IDclients ,client.Name, client.FirstName, client.Address, client.Email, client.Phone]

    console.log(data);

    sql ="INSERT INTO archived_clients SET IDclients=?, Name=?, FirstName=?, Address=?, Email=?, Phone=? "
        
    res.end();
    postbdd();

})

function postbdd() {
    connection.query(sql, data, (err, client, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })
  }

s
module.exports = router;