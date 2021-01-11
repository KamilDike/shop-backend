//status.js
const bookshelf= require('../config/bookshelf');

const Status = bookshelf.Model.extend({
   tableName: 'orderstate'
})

module.exports.getAll = () => {
    return Status.fetchAll();
}

module.exports.get = (id) => {
    return new Status({id: id}).fetch();
}
 
exports.Status = Status;