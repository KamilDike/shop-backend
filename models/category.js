//category.js
const bookshelf= require('../config/bookshelf');

const Category = bookshelf.Model.extend({
   tableName: 'productscategories'
})

module.exports.getAll = () => {
    return Category.fetchAll();
}
 
module.exports.get = (id) => {
    return Category.where({id: id}).fetchAll();
}

exports.Category = Category;