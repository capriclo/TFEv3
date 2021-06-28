const express = require('express');
const router = express.Router();
let mysql = require('mysql');


let all_archived_clients;
let data;
let sql;
let oos;

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
    console.log ('oos2');
    sql = 'SELECT * FROM books WHERE Quantity = ' +0;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        oos = result;
    
      });
      console.log("sellings " +JSON.stringify(oos));
    res.status(200).json({
        all_oos : oos
    })
    console.log(all_oos);
})


  router.post('/', (req,res, next)=> {
        console.log('.................................................................................................');
        console.log(req.body);
        console.log("idbooks = " +req.body.idbooks);
        const out_of_stock = {
            idbooks: req.body.idbooks,
            Title: req.body.Title, 
            Book_code : req.body.Book_code,
            Supplier: req.body.Supplier,
            Edition: req.body.Edition,
            VAT: req.body.VAT,
            Barcode: req.body.Barcode,
            Author: req.body.Author,
            Quantity: req.body.Quantity,
            Price: req.body.Price,
            Loyalty_discount: req.body.Loyalty_discount 
        };
    console.log('const out_of_stock' +JSON.stringify(out_of_stock))
    
    res.status(200).json({
        message: 'Handling POST request to /out_of_stock',
        created_Out_of_stock: out_of_stock 
    })

    data = [out_of_stock.idbooks ,out_of_stock.Title, out_of_stock.Book_code, out_of_stock.Supplier, out_of_stock.Edition, out_of_stock.VAT, out_of_stock.Barcode, out_of_stock.Author, out_of_stock.Quantity, out_of_stock.Price, out_of_stock.Loyalty_discount]

    console.log("data = " +JSON.stringify(data));

    sql ="INSERT INTO out_of_stcok SET idbooks=?, Title=?, Book_code=?, Supplier=?, Edition=?, VAT=?, Barcode=?, Author=?, Quantity=?, Price=?, Loyalty_discount=? "
        
    res.end();
    postbdd();

})

router.delete('/:idbooks', (req, res, next) => {
  const id = req.params.idbooks;
  /*var delete_request = "DELETE FROM clients WHERE IDclients = " +id;
  connection.query(delete_request, function (err, result) {
    console.log(result);
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
    res.status(200).json({
        message : 'Deleted product'
    })
    res.end();*/
})

function postbdd() {
    connection.query(sql, data, (err, client, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })
  }

  


module.exports = router;