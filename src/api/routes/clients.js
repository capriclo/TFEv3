const express = require('express');
const router = express.Router();
//let mysql = require('mysql');

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message : 'Handling GET request to /products'
    })
})

router.post('/', (req, res, next)=> {
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

    console.log(client);
    
})

router.get('/:clientID', (req, res, next) => {
    const id = req.params.clientID;

    if (id === 'special'){
        res.status(200).json({
            message : 'You discovert the special ID',
            id : id 
        });
    }else{
        res.status(200).json({
            message : 'You passed an ID'
            
        });
    }
})

router.patch('/:clientID', (req, res, next) => {
    res.status(200).json({
        message : 'Updated product'
    })
})

router.delete('/:clientID', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product'
    })
})

module.exports = router;