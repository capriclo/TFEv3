const express = require('express');
const router = express.Router();
let mysql = require('mysql');

//let allbooks;

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

//Handle incomming GET request to /oders
/*router.get('/', (req, res, next)=> {
    connection.query("SELECT * FROM books", function (err, result) {
        if (err) throw err;
        console.log(result);
        allbooks = result;
    
      });
      console.log(allbooks);
    res.status(200).json({
        books : allbooks
    })
    console.log(allbooks);
})*/


/*router.get('/:bookID', (req, res, next)=> {
    const id = req.params.bookID;
    sql = 'SELECT * FROM books WHERE idbooks = ' +id;
        connection.query(sql, function (err, result) {
            console.log(result);
            if (err) throw err;
            book = result;
          });
          console.log(book)
        res.status(200).json({
            message : 'Bienvenue',
            book : book
        })

        res.end();
})*/

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




module.exports = router;