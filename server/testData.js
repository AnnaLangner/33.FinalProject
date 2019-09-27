const Product = require('./models/product.model');

const loadTestData = async () => {
    const data = [
        {
            id: 'man(1)',
            name: 'Product 1',
            brand: 'A&L',
            model: 'male',
            picture: 'man(1)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: 'man(2)',
            name: 'Product 2',
            brand: 'A&L',
            model: 'male',
            picture: 'man(2)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
    ];

    try {
        await Product.create(data);
        console.log('Test data has been successfully loaded');
    }  catch (err) {
        console.log('Couldn\'t load test data', err);
    }
};

module.exports = loadTestData;