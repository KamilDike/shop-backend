const ApiError = require('../error/ApiError');
const Order = require('../models/order');
const OrderList = require('../models/orderList')

exports.getAll = (req, res) => {
    OrderList.getAll().then(
        function(allOrderLists) {
            if (req.user.permission === 'Admin') {
                res.json(allOrderLists);
            } else {
                res.status(403).send()
            }
        }
    );
};

exports.getAllByOrderId = (req, res, next) => {
    Order.getById(req.params.orderId).then((order) => {
        if (req.user.id === order.attributes.userid || req.user.permission === 'Admin') {
            OrderList.getByOrderId(req.params.orderId)
            .then((orderList) => {
                res.json(orderList);
            })
            .catch(() => {
                const error = `Order list for order with ID: ${req.params.orderId} not found.`;
                res.status(500).send(error);
                return;
            });
        } else {
            res.status(403).send()
        }
    })
};

exports.store = (req, res, next) => {
    Order.getById(req.params.orderId).then(order => {
        if (order.attributes.userid === req.user.id || req.user.id === 'Admin') {
            OrderList.create({
                'productid': req.body.productId,
                'orderid': req.params.orderId,
            }).then(() => {
                res.status(201).send()
            }).catch(() => {
                const error = 'OrderId or productId are not valid.';
                res.status(406).send(error);
                return;
            });
        } else {
            res.status(403).send()
        }
    })
};

exports.updateAmount = (req, res, next) => {
    if (req.body.quantity < 1) { res.status(400).send() }
    Order.getById(req.params.orderId).then(order => {
        if (order.attributes.userid === req.user.id) {
            OrderList.update(req.body).then((orderList) => {
                res.json(orderList)}).catch(() => {
                const error = `Order List with ID: ${req.body.orderId} not found.`;
                res.status(404).send(error);
                return;
            })
        } else {
            res.status(403).send()
        }
    })
}

exports.delete = (req, res) => {
    Order.getById(req.params.orderId).then(order => {
        if (order.attributes.userid === req.user.id) {
            OrderList.delete(req.body.id).then(() => {
                res.status(200).send()
            }).catch(() => res.status(404).send('Error'))
        } else {
            res.status(403).send()
        }
    })
}

// function validateOrderList(quantity, productId) {
//     if (!quantity || !productId) {
//         return 'You must specify number of products and productId | .'
//     } else if (quantity < 1) {
//         return `You can't order ${quantity} amount of products.`
//     }
//     return '';
// }