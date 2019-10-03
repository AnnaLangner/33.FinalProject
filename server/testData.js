const Product = require('./models/product.model');

const loadTestData = async () => {
    const data = [
        {
            id: '1',
            name: 'Jacket 1',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(1)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '2',
            name: 'Shirt 1',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(2)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '3',
            name: 'Shirt 2',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(3)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '4',
            name: 'Jacket 2',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(4)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '5',
            name: 'Jacket 3',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(5)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '6',
            name: 'Coat 1',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(6)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '7',
            name: 'Shirt 3',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(7)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '8',
            name: 'Jacket 4',
            brand: 'A&L',
            model: 'male',
            price: '9,99 $',
            picture: 'man(8)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '9',
            name: 'Sweater',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(1)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '10',
            name: 'Skirt',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(2)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '11',
            name: 'Coat 2',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(3)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '12',
            name: 'Costume',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(4)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '13',
            name: 'Dress 1',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(5)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '14',
            name: 'Shirt 4',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(6)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '15',
            name: 'Dress 2',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(7)',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '16',
            name: 'Dress 3',
            brand: 'A&L',
            model: 'female',
            price: '9,99 $',
            picture: 'woman(8)',
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