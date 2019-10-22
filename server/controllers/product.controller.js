const Product = require('../models/product.model');

//get all products
exports.getProducts = async (req, res) => {
    try {
        res.status(200).json(await Product.find());
    } catch(err) {
        res.status(500).json(err);
    }
};

//get single product
exports.getSingleProduct = async (req, res) => {
    Product.findOne({id: req.params.id}).exec((err, product) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(product);
    });
};

// get product by range
exports.getProductByRange = async function (req, res) {

    try {
        let { startAt, limit } = req.params;

        startAt = parseInt(startAt);
        limit = parseInt(limit);

        const product = await Product.find().skip(startAt).limit(limit);
        const amount = await Product.countDocuments();

        res.status(200).json({
            product,
            amount,
        });

    } catch(err) {
        res.status(500).json(err);
    }

};