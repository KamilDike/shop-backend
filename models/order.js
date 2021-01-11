//order.js
const bookshelf= require('../config/bookshelf');
const orders = require('../data/OrderData');

const Order = bookshelf.Model.extend({
   tableName: 'orders'
})

module.exports.getAll = () => {
    return Order.fetchAll();
}
 
module.exports.getById = (id) => {
    return new Order({'id':id}).fetch();
}

module.exports.getAllFromUser = (userId) => {
    return Order.where({'userid': userId}).fetchAll();
}

module.exports.getByState = (id) => {
    return Order.where({state: id}).fetchAll();
}

module.exports.create = ({userid}) => {
    return new Order({
        userid: userid,
        orderstate: 1,
    }).save();
}

module.exports.update = (req) => {
    return new Order({

    }).save( {
        id: req.params.id,
        orderstate: req.body.orderstate,
        total: req.body.total,
        date: req.body.date
        }, 
        {patch: true}
    );
}

exports.Order = Order;