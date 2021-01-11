//orderList.js
const bookshelf= require('../config/bookshelf');

const OrderList = bookshelf.Model.extend({
   tableName: 'orderitems'
})

module.exports.getAll = () => {
    return OrderList.fetchAll();
}
 
module.exports.getByOrderId = (id) => {
    return OrderList.where({orderid: id}).fetchAll();
}

module.exports.create = ({productid, orderid}) => {
    return new OrderList({
        productid: productid,
        quantity: 1,
        orderid: orderid,
    }).save();
 };

module.exports.getProducts = (id) => {
    new OrderList.where({orderid: id}).fetchAll().then((item) => {
        console.log(item)
    });
}

 module.exports.update = ({id, quantity}) => {
     return new OrderList({

     }).save({
        id: id,
        quantity: quantity,
        }, 
        {patch: true}
     )
 }

 module.exports.delete = (id) => {
    return new OrderList({id: id}).destroy();
 }