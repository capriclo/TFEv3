const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let allclients;
let client;
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

router.post('/', (req,res, next)=> {
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

    data = [client.name, client.first_name, client.address, client.email, client.phone]

    console.log(data);

    sql ="INSERT INTO clients SET Name=?, FirstName=?, Address=?, Email=?, Phone=? "
        
    res.end();
    postbdd();

})

router.get('/:clientID', (req, res, next) => {
    const id = req.params.clientID;
    sql = 'SELECT * FROM clients WHERE IDclients = ' +id;
        connection.query(sql, function (err, result) {
            console.log(result);
            if (err) throw err;
            client = result;
          });
        res.status(200).json({
            message : 'Bienvenue',
            client : client
        })

        res.end();
})



router.patch('/:clientID', (req, res, next) => {
    const id = req.params.clientID;
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

    })
    
})

router.delete('/:clientID', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product'
    })
    res.end();
})

router.post('/books/', (req, res, next)=> {
    const book = {
        title: req.body.title, 
        book_code : req.body.book_code,
        supplier: req.body.supplier, 
        edition : req.body.edition,
        vatrate : req.body.VAT,
        barcode : req.body.barcode,
        author : req.body.author,
        quantity : req.body.quantity,
        price : req.body.price,
        loyalty_discount : req.body.loyalty_discount
    };
    res.status(202).json({
        message : 'Book was created',
        book: book
    })
    res.end();
    data = [book.title, book.book_code, book.supplier,book.edition, book.vatrate,book.barcode, book.author, book.quantity, book.price, book.loyalty_discount]
    console.log(data);

    sql = "INSERT INTO books SET Title=?, Book_code=?, Supplier=?, Edition=?, VAT=?, Barcode=?, Author=?, Quantity=?, Price=?, Loyalty_discount=? "
    postbdd();
})

function postbdd() {
    connection.query(sql, data, (err, book, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })
  }

module.exports = router;