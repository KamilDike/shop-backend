const Category = require('../models/category')

exports.getAll = (req, res) => {
    Category.getAll().then((allCategories) => {
            res.json(allCategories);
        }
    ).catch(() => res.status(503).send());
};

exports.get = (req, res) => {
    Category.get(req.params.id).then((category) => {
        res.json(category)
    }).catch(() => res.status(503).send())
}