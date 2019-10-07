const Product = require('./models/product.model');

const loadTestData = async () => {
    const data = [
        {
            id: '1',
            name: 'Jacket 1',
            brand: 'A&L',
            model: 'male',
            price: '$ 5',
            picture: { src: '../client/src/picture/men (1).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '2',
            name: 'Shirt 1',
            brand: 'A&L',
            model: 'male',
            price: '$ 7',
            picture: { src: '../client/src/picture/men (2).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '3',
            name: 'Shirt 2',
            brand: 'A&L',
            model: 'male',
            price: '$ 8',
            picture: { src: '../client/src/picture/men (3).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '4',
            name: 'Jacket 2',
            brand: 'A&L',
            model: 'male',
            price: '$ 5',
            picture: { src: '../client/src/picture/men (4).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '5',
            name: 'Jacket 3',
            brand: 'A&L',
            model: 'male',
            price: '$ 6',
            picture: { src: '../client/src/picture/men (5).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '6',
            name: 'Coat 1',
            brand: 'A&L',
            model: 'male',
            price: '$ 9',
            picture: { src: '../client/src/picture/men (6).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '7',
            name: 'Shirt 3',
            brand: 'A&L',
            model: 'male',
            price: '$ 7',
            picture: { src: '../client/src/picture/men (7).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '8',
            name: 'Jacket 4',
            brand: 'A&L',
            model: 'male',
            price: '$ 4',
            picture: { src: '../client/src/picture/men (8).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '9',
            name: 'Sweater',
            brand: 'A&L',
            model: 'female',
            price: '$ 4',
            picture: { src: '../client/src/picture/women (1).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '10',
            name: 'Skirt',
            brand: 'A&L',
            model: 'female',
            price: '$ 3',
            picture: { src: '../client/src/picture/women (2).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '11',
            name: 'Coat 2',
            brand: 'A&L',
            model: 'female',
            price: '$ 11',
            picture: { src: '../client/src/picture/women (3).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '12',
            name: 'Costume',
            brand: 'A&L',
            model: 'female',
            price: '$ 16',
            picture: { src: '../client/src/picture/women (4).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '13',
            name: 'Dress 1',
            brand: 'A&L',
            model: 'female',
            price: '$ 10',
            picture: { src: '../client/src/picture/women (5).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '14',
            name: 'Shirt 4',
            brand: 'A&L',
            model: 'female',
            price: '$ 12',
            picture: { src: '../client/src/picture/women (6).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '15',
            name: 'Dress 2',
            brand: 'A&L',
            model: 'female',
            price: '$ 13',
            picture: { src: '../client/src/picture/women (7).jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '16',
            name: 'Dress 3',
            brand: 'A&L',
            model: 'female',
            price: '$ 14',
            picture: { src: '../client/src/picture/women (8).jpg'},
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