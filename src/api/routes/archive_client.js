const express = require('express');
const router = express.Router();
let mysql = require('mysql');


let all_archived_clients;
let data;
let sql;

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

  router.get('/', (req, res, next)=> {
    connection.query("SELECT * FROM archived_clients", function (err, result) {

        if (err) throw err;
        console.log(result);
        all_archived_clients = result;
    
      });
      console.log(all_archived_clients);
    res.status(200).json({
        clients : all_archived_clients
    })
    console.log(all_archived_clients);
})

  router.post('/', (req,res, next)=> {
        console.log('.................................................................................................');
        console.log(req.body);
        console.log(req.body.client[0].Name);
        const client = {
            IDclients: req.body.client[0].idclients,
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

    sql ="INSERT INTO archived_clients SET idclients=?, Name=?, FirstName=?, Address=?, Email=?, Phone=? "
        
    res.end();
    postbdd();

})

router.delete('/:clientID', (req, res, next) => {
  const id = req.params.clientID;
  var delete_request = "DELETE FROM clients WHERE IDclients = " +id;
  connection.query(delete_request, function (err, result) {
    console.log(result);
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
    res.status(200).json({
        message : 'Deleted product'
    })
    res.end();
})

function postbdd() {
    connection.query(sql, data, (err, client, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })
  }

  


module.exports = router;