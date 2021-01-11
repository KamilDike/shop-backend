const ApiError = require('../error/ApiError');
const Order = require('../models/order')

exports.getAll = (req, res) => {
    Order.getAll().then(
        function(allOrders) {
            let currentOrders = [];
            if (req.user.permission === 'Admin') {
                currentOrders = allOrders;
            } else {
                currentOrders = allOrders.filter(order => 
                    order.attributes.userid === req.user.id)
            }
            res.json(currentOrders)
        }
    );
};

exports.getById = (req, res, next) => {
    Order.getById(req.params.id)
        .then((order) => {
            if (order.attributes.permission === 'Admin') {
                res.json(order);
            } else {
                res.status(403).send()
            }
        })
        .catch(() => {
            const error = `Order with ID: ${req.params.id} not found.`;
            res.status(404).send(error);
            return;
        });
};

exports.store = (req, res) => {
    Order.create({
        'userid': req.user.id,
    }).then(() => {
        res.status(201).send()
    }).catch(() => {res.status(500).send()});
};

exports.updateState = (req, res, next) => {
    Order.getById(req.params.id)
    .then((order) => {
        if (order.attributes.userid === req.user.id || req.user.permission === 'Admin') {
            let error = validateNewState(order.attributes.orderstate, req.body.orderstate);
            if (error) {
                res.status(406).send(error);
                return;
            } else if (!req.body.total && req.body.orderstate == 2) {
                res.status(400).send('Wrong Total.')
            }
            Order.update(req).then(
                (order) => { 
                    res.json(order) 
                }
            );
        } else {
            res.status(403).send()
        }
    })
    .catch(() => {
        const error = `Order with ID: ${req.params.id} not found.`;
        res.status(404).send(error);
        return;
    });
}

exports.updateById = (req, res, next) => {
    let error = validateOrder(req.body);
    if (error) {
        res.status(404).send(error);
        return;
    }

    Order.updateById(req.body).then(
        (order) => {
            res.json(order);
        }
    ).catch(() => {
        let error = `Order with ID: ${req.body.id} not found.`;
        res.status(404).send(error);
        return;
    })
};

exports.getByState = (req, res) => {
    Order.getAll().then(
        function(allOrders) {
            let currentOrders = [];
            if (req.user.permission === "Admin") {
                currentOrders = allOrders.filter(order =>
                    order.attributes.orderstate == req.params.state);
            } else if (req.user.id) {
                currentOrders = allOrders.filter(order => 
                    (order.attributes.orderstate == req.params.state) &&
                    (order.attributes.userid == req.user.id));
            }
            res.json(currentOrders)
        }
    );
 };

function validateOrder({username, email, phone}) {
    if (!username || !email || !phone || 
        username == '' || email == '' || phone == '') {
        return 'Please provide username, email and phone number.';
    } else if(phone.length != 9) {
        return 'Phone number must be 9 digits.'
    } else {
        for (const iterator of phone) {
            if (iterator < '0' || iterator > '9') {
                return 'Phone number must be only digits.'
            }
        }
    }
    return;
}

function validateNewState(oldState, newState) {
    if (oldState == 3) {
        return 'Cannot update canceled order.'
    } 
    if (newState > oldState && newState <= 4) {
        return ''
    } else {
        return `New state must be greater than old state and must belong to state codes[1 - 4]`;
    }
}

