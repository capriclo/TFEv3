const express = require('express');
const router = express.Router();
let mysql = require('mysql');
var all_oos_1;
var oos;


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


//en cours de dévellopement 
router.get('/', (req, res, next) => {
    var sql = 'SELECT * FROM books WHERE Quantity = 0';
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("result" +JSON.stringify(result));
        all_oos_1 = result;
    })
    res.status(200).json({
        oos : all_oos_1
    })
    console.log("all_oos " +JSON.stringify(all_oos_1));
    res.end();
})


router.post('/', (req,res, next)=> {
    const selling = {
        title: req.body.title, 
        price : req.body.prix,
        vat: req.body.tva,
        barcode : req.body.barcode,
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
    res.end();

    data = [selling.title, selling.price, selling.vat, selling.barcode ,selling.quantity, selling.client_id, selling.date_selling, selling.total_int]

    console.log(data);
    sql ="INSERT INTO sellings SET Title=?, Price=?, VAT=?, Barcode=?, Quantity=?, Client_id=?, Date_sellings=?, Total=?"

    connection.query(sql, data, (err, book, field)=>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })

    res.end();

})

router.patch('/:barcode', (req, res, next) => {
    var barcode = req.params.barcode;
    var quantity_max = req.body[1];
    console.log("quantity_max = " +quantity_max);
    console.log('ch1 = ' +barcode);

    barcode = barcode.replace(/\\/g,"\\\\")
    barcode = barcode.replace(/\'/g,"\\'")
    barcode = barcode.replace(/\"/g,"\\\"")

    console.log('ch2 = ' +barcode);
    
    const quote = "\""; 
    barcode = "" +quote +barcode +quote;
    console.log("barcode " +barcode);
    console.log("req/body : " +req.body);
    
    var quantity_fin = req.body[1] -req.body[2];
    

    res.status(200).json({
        message: 'Handling POST request to /books ',
        UpdateBooks: barcode,
    })
    res.end();
    var data = [quantity_fin, barcode]
    console.log("data = " +data);
    connection.query("update books set quantity =" +quantity_fin  +" where Barcode=" +barcode  ,data,
    (err, data, field) =>{
        if (err) {
            return console.error('error: ' + err.message);
          }

    })
    
})


module.exports = router;