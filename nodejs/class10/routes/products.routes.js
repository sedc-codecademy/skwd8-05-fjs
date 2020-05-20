const products = require('express').Router();
const ProductsController = require('../controllers/products.controller');

const pc = new ProductsController();

products.get('/:id?', (req, res) => {

    if(req.params && req.params.id)
    res.status(200).json(pc.getById(req.params.id));
    else
    res.status(200).json(pc.getAll());

});

products.post('/', (req, res) => {

    if( ! req.body )
    {
        res.status(412).json({error: {message: "Missing params"}});
    }
    else if( req.body && (! req.body.name || ! req.body.price) )
    {
        res.status(412).json({error: {message: "Missing params"}})
    }
    else
    {
        if(pc.addNew(req.body))
        res.status(200).json({});
        else
        res.status(400).json({error: {message: "Product can not be added"}});
    }
});


products.put('/:id', (req, res) => {

    if( ! req.body || ! req.params.id )
    {
        res.status(412).json({error: {message: "Missing params"}});
    }
    else if( req.body && (! req.body.name || ! req.body.price) )
    {
        res.status(412).json({error: {message: "Missing params"}})
    }
    else
    {
        if(pc.update(req.params.id, req.body))
        res.status(200).json({});
        else
        res.status(400).json({error: {message: "Product can not be updated"}});
    }
});

products.delete('/:id', (req, res) => {

    if( ! req.params.id)
    res.status(412).json({error: {message: "Missing params"}});
    else
    {
        if(pc.deleteById(req.params.id))
        res.status(200).json({})
        else
        res.status(400).json({error: {message: "Product not deleted"}});
    }
})

module.exports = products;