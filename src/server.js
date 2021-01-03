const http = require ('http');
console.log('Pirouette');
var allclients;

const express = require('express');
const newclient = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {createProxyMiddleware} = require('http-proxy-middleware');
const mysql = require('mysql');


//connection to BDD
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

  // imports route api clients 
    const clientsRoutes = require ('./api/routes/clients')
    const check_emailRoutes = require ('./api/routes/check_email')
    const check_phoneRoutes = require ('./api/routes/check_phone')
    const bookRoutes = require ('./api/routes/books')
    const check_bookRoutes = require('./api/routes/check_book')
    const barcodeRoutes = require('./api/routes/barcode')
    const archived_client = require('./api/routes/archive_client')
    const check_book_code = require('./api/routes/check_book_code')
    const check_barcode = require('./api/routes/check_barcode')
    const sellings = require('./api/routes/sellings')
    const out_of_stock = require('./api/routes/out_of_stock')
    const check_oos = require('./api/routes/check_oos')
    const history_sales = require('./api/routes/history_sales')




   newclient.use(morgan('dev'));
    newclient.use(bodyParser.urlencoded({extended: false}));
    newclient.use(bodyParser.json());

    // Routes whitch should handle request
    newclient.use('/clients', clientsRoutes)
    newclient.use('/books', bookRoutes)
    newclient.use('/check_email', check_emailRoutes)
    newclient.use('/check_phone', check_phoneRoutes)
    newclient.use('/check_book', check_bookRoutes)
    newclient.use('/barcode', barcodeRoutes)
    newclient.use('/archive_client', archived_client)
    newclient.use('/check_book_code', check_book_code)
    newclient.use('/check_barcode', check_barcode)
    newclient.use('/sellings', sellings)
    newclient.use('/out_of_stock', out_of_stock)
    newclient.use('/check_oos', check_oos)
    newclient.use('/history_sales', history_sales)


    //console.log(proxy);
    newclient.use(createProxyMiddleware("/clients",{
      target:'https://jsonplaceholder.typicode.com/',
      secure: false, 
      changeOrigin: true
    })
      )

     /* newclient.use(createProxyMiddleware("/books",{
        target:'https://jsonplaceholder.typicode.com/',
        secure: false, 
        changeOrigin: true
      })
        )*/

    newclient.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        res.end();
    })

    newclient.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        })
        res.end();
    });

    newclient.listen(3012);


    //data for server
    const port = process.env.port || 3014;

    const server = http.createServer(newclient);

    server.listen(port);