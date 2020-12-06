const express = require('express');
const router = express.Router();
let mysql = require('mysql');

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
    const selling = {
        title: req.body.title, 
        price : req.body.prix,
        vat: req.body.tva,
        quantity : req.body.quantity,
        client_id: req.body.client_id,
        date_selling: req.body.date_selling,
        total_int: req.body.total_int
    };
    console.log(selling);
    
    res.status(200).json({
        message: 'Handling POST request to /sellings',
        createdSelling: selling
    })

    data = [selling.title, selling.price, selling.vat, selling.quantity, selling.client_id, selling.date_selling, selling.total_int]

    console.log(data);
    sql ="INSERT INTO sellings SET Title=?, Price=?, VAT=?, Quantity=?, Client_id=?, Date_sellings=?, Total=?"

    connection.query(sql, data, (err, book, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })

    res.end();

})

router.patch('/:barcode', (req, res, next) => {
    var barcode = req.params.barcode;
    console.log('ch1 = ' +barcode);

    barcode = barcode.replace(/\\/g,"\\\\")
    barcode = barcode.replace(/\'/g,"\\'")
    barcode = barcode.replace(/\"/g,"\\\"")

    console.log('ch2 = ' +barcode);
    
    const quote = "\""; 
    barcode = "" +quote +barcode +quote;
    console.log("barcode " +barcode);
    
   /*const id = req.params.clientID;
    console.log(id);
    const client = {
        name: req.body.new_name, 
        first_name : req.body.new_first_name,
        address: req.body.new_address,
        email: req.body.new_email,
        phone: req.body.new_phone
    };
    console.log(req.body)
    console.log(req.body.new_name)
    console.log(client)
    res.status(200).json({
        message: 'Handling POST request to /clients',
        UpdateClient: id,
    })
    res.end();
    var data = [client.name, client.first_name, client.address, client.email, client.phone, id]
    connection.query("UPDATE clients SET Name=?, FirstName=?, Address=?, Email=?, Phone=? WHERE IDclients = ?", data,
    (err, client, field) =>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })*/
    
})


module.exports = router;