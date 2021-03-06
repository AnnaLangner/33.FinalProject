const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: 'String', required: true },
    name: { type: 'String', required: true },
    brand: { type: 'String', required: true },
    model:{ type: 'String', required: true },
    image:{type: 'Object', required: true},
    price: { type: 'String', required: true },
    content: { type: 'String', required: true },
});

module.exports = mongoose.model('Product', Product);