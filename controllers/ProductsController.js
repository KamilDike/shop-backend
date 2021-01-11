const products = require('../data/ProductData');
const _ = require('underscore');
const Product = require('../models/product');
const ApiError = require('../error/ApiError');

exports.getAll = (req, res) => {
    Product.getAll().then(
        (allProducts) => {
            res.json(allProducts);
        }
    );
};

exports.getPage = (req, res) => {
    Product.getPage(req.params.id, res);
}

exports.getPageCategory = (req, res) => {
    Product.getPageCategory(req.params.id, res, req.params.category);
}

exports.getById = (req, res, next) => {
    Product.getById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch(() => {
            const error = `Product with ID: ${req.params.id} not found.`;
            res.status(404).send(error);
        });
};

exports.store = (req, res, next) => {
     
    let error = validateProduct(req.body);
    if (error) {
        res.status(406).send(error);
        return;
    }

    const newProduct = Product.create(req.body).then(() => {
        res.json({
            'status':'saved!',
            'product': newProduct,
        });
    }).catch(() => { res.status(500).send() });
};

exports.delete = (req, res, next) => {
    Product.delete(req.params.id).then(() => {
        res.status(201).send()
    }).catch(() => res.status(404).send())
}

exports.updateById = (req, res, next) => {
    let error = validateProduct(req.body);
    if (error) {
        res.status(406).send(error);
        return;
    }
    Product.update(req.body).then((product) => {
        res.json(product);
    }).catch(() => {
        let error = `Product with ID: ${req.body.id} not found.`;
        res.status(404).send(error);
        return;
    })
}

function validateProduct({name, price, weight}) {
    if (name == '') {
        return 'Name must not be empty.';
    } else if (price <= 0 || weight <= 0) {
        return 'Price and weight must be correct.';
    }
    return;
}