const router = require('express').Router();
var userController = require('./controllers/userController');
var productController = require('./controllers/productController');

//Users
router.route('/user')
    .get(userController.getAllUsers)
    .post(userController.newUser)
router.route('/user/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

//Products
router.route('/products')
    .get(productController.getAllProducts)
    .post(productController.newProduct)
router.route('/product/:id')
    .get(productController.getProduct)
    .put(productController.updateProduct)

    
router.get('/', function(req, res) {

    res.json({
        status: 'API working',
        message: 'Welcome to API'
    });
});

module.exports = router;