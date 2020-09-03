const express = require('express');
const router = express.Router();

//Handle incomming GET request to /oders
router.get('/', (req, res, next)=> {
    res.status(200).json({
        message : 'Books are fetch'
    })
})

router.post('/', (req, res, next)=> {
    const book = {
        title: req.body.title, 
        bookcode : req.body.bookcode,
        supplier: req.body.supplier, 
        edition : req.body.edition,
        vatrate : req.body.vatrate,
        barcode : req.body.barcode,
        author : req.body.author,
        quantity : req.body.quality,
        price : req.body.price,
        loyaltydiscount : req.body.loyaltydiscount
    };
    res.status(201).json({
        message : 'Book was created',
        book: book
    })
})

router.get('/:bookID', (req, res, next)=> {
    res.status(200).json({
        message : 'Book details',
        bookID : req.params.bookID
    })
})

router.deleted('/:bookID', (req, res, next)=> {
    res.status(200).json({
        message : 'Book deleted',
        bookID : req.params.bookID
    })
})


module.exports = router;