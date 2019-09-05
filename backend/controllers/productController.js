Product = require('../models/productModel');

//CREATE product
function newProduct(req, res) {
    console.log("creating new product")
    var product = new Product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.quantity = req.body.quantity;
    product.image = req.body.image;

    product.save(function(err) {
        err ? res.json(err) : res.json({message: "product created", data: product});
    });
}

//RETRIEVE all products
function getAllProducts(req, res) {
    var product = new Product();

    Product.find({}, function(err, products) {
        err ? res.json(err) : res.json({status: "success", data: products});
    });
}

//RETRIEVE single product by ID
function getProduct(req, res) {
    var product = new Product();

    Product.findById(req.params.productId, function(err, products) {
        err ? res.json(err) : res.json({status: "success", data: products});
    });
}

//UPDATE product by id
function updateProduct(req, res) {
    var product = new Product();

    product.findById(req.params.productId, function(err, product) {
        err && res.send(err);
        product.name = req.body.name ? req.body.name : product.name;
        product.description = req.body.description ? req.body.description : product.description;
        product.price = req.body.price ? req.body.price : product.price;
        product.quantity = req.body.quantity ? req.body.quantity : product.quantity;
        product.image = req.body.image ? req.body.image : product.image;   
    });

    product.save(function(err) {
        err ? res.json(err) : res.json({status:"success", data: product});
    })
}

//DELETE product
function deleteProduct(req, res) {
    var product = new Product();

    Product.remove({_id: req.params.productId}, function(err, products) {
        err ? res.json(err) : res.json({status: "success", message: "Product deleted."});
    });
}
module.exports = {
    newProduct: newProduct,
    getAllProducts: getAllProducts,
    updateProduct: updateProduct,
    getProduct: getProduct,
    deleteProduct: deleteProduct
}
