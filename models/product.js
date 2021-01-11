//product.js
const bookshelf= require('../config/bookshelf');
const Category = require('./category');

const Product = bookshelf.Model.extend({
   tableName: 'products'
})

module.exports.getAll = () => {
   return Product.fetchAll();
}

module.exports.getPage = (number, res) => {
   Product.fetchPage({
      pageSize: 6,
      page: number,
   }).then((results) => {
      res.json(results);
   }).catch(() => res.status(503).send())
}

module.exports.getPageCategory = (number, res, category) => {
   Product.where({category: category}).fetchPage({
      pageSize: 6,
      page: number,
   }).then((results) => {
      res.json(results);
   }).catch(() => res.status(503).send())
}

module.exports.getById = (id) => {
   return new Product({'id':id}).fetch();
}

module.exports.create = (product) => {
   return new Product({
       name: product.name,
       description: product.description,
       price: product.price,
       weight: product.weight,
       category: product.category,
   }).save();
};

module.exports.delete = (id) => {
   return new Product({id: id}).destroy()
}

module.exports.update = (product) => {
   return new Product({
       
   }).save( {
       id: product.id,
       name: product.name,
       description: product.description,
       price: product.price,
       weight: product.weight,
       img: product.img,
       quantity: product.quantity,
       category: product.category
       }, 
       {patch: true}
   );
}

exports.Product = Product;