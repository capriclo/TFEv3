const express = require('express');
const router = express.Router();
let mysql = require('mysql');

let allbooks;

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

//Handle incomming GET request to /oders
router.get('/', (req, res, next)=> {
  sql = 'SELECT * FROM books WHERE Quantity != ' +0;
  connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        allbooks = result;
    
      });
      console.log(allbooks);
    res.status(200).json({
        books : allbooks
    })
    console.log(allbooks);
})


router.get('/:bookID', (req, res, next)=> {
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
})

router.post('/update/:bookID', (req, res, next) => {
  const id = req.params.bookID;
  console.log("id =" +id);
  console.log("req.body = " +JSON.stringify(req.body[0].title));

  const book = {
    title: req.body[0].title,
    book_code: req.body[0].book_code,
    supplier : req.body[0].supplier,
    edition : req.body[0].edition,
    VAT : req.body[0].VAT,
    barcode : req.body[0].barcode,
    author : req.body[0].author,
    quantity : req.body[0].quantity,
    price : req.body[0].price,
    loyalty_discount : req.body[0].loyalty_discount
  };
  console.log("book = " +JSON.stringify(book));
  
  res.status(200).json({
      message: 'Handling UPDATE request to /books',
      UpdateBook: id
  })
  res.end();
  
  var data = [book.title, book.book_code, book.supplier, book.edition, book.VAT, book.barcode, book.author, book.quantity, book.price, book.loyalty_discount, id];
  console.log("data = " +JSON.stringify(data));
  connection.query("UPDATE books SET Title=?, Book_code=?, Supplier=?, Edition=?, VAT=?, Barcode=?, Author=?, Quantity=?, Price=?, Loyalty_discount=? WHERE idbooks = ?", data,
  (err, book, field) =>{
      if (err) {
          return console.error('error: ' + err.message);
        }

  })
  
})

router.get('/delete/:bookID', (req, res, next) => {
    const id = req.params.bookID;
    console.log("id = " +id)
    var delete_request = "DELETE FROM books WHERE idbooks = " +id;
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


module.exports = router;