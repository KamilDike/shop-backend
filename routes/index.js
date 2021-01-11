//routes/index.js
const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');
const ProductsController = require('../controllers/ProductsController');
const CategoriesController = require('../controllers/CategoriesController');
const OrdersController = require('../controllers/OrdersController');
const OrderListController = require('../controllers/OrderListController');
const StatusController = require('../controllers/StatusController');
const UsersController = require('../controllers/UsersController');

router.get('/', IndexController.home)
router.get('/products', ProductsController.getAll);
router.get('/products/:id', ProductsController.getById);
router.get('/products/page/:id', ProductsController.getPage);
router.get('/products/page/:id/:category', ProductsController.getPageCategory);
router.post('/products', ProductsController.store);
router.put('/products', ProductsController.updateById);
router.delete('/products/:id', ProductsController.delete);

router.get('/categories', CategoriesController.getAll);
router.get('/categories/:id', CategoriesController.get);

router.get('/orders', UsersController.authenticate, OrdersController.getAll);
router.get('/orders/:id', UsersController.authenticate, OrdersController.getById);
router.get('/orders/status/:state', UsersController.authenticate, OrdersController.getByState);
router.post('/orders', UsersController.authenticate, OrdersController.store);
router.put('/orders', OrdersController.updateById);
router.put('/orders/:id/status', UsersController.authenticate, OrdersController.updateState);

router.get('/orderList/:orderId', UsersController.authenticate, OrderListController.getAllByOrderId);
router.get('/orderList', UsersController.authenticate, OrderListController.getAll);
router.post('/orderList/:orderId', UsersController.authenticate, OrderListController.store);
router.put('/orderList/:orderId', UsersController.authenticate, OrderListController.updateAmount);
router.delete('/orderList/:orderId', UsersController.authenticate, OrderListController.delete);

router.get('/status', StatusController.getAll);
router.get('/status/:id', StatusController.get);

router.get('/users', UsersController.authenticate, UsersController.get);
router.post('/users', UsersController.add);
router.post('/users/token', UsersController.refreshToken)
router.post('/users/login', UsersController.login);
router.post('/users/logout', UsersController.logout);
//router.put('/users', UsersController.update);

module.exports = router;