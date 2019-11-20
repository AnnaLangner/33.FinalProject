const Product = require('./models/product.model');

const loadTestData = async () => {
    const data = [
        {
            id: '1',
            tag: 'new',
            name: 'Jacket 1',
            brand: 'A&L',
            model: 'male',
            price: '$ 5',
            image: { src: '../../../picture/men1.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '2',
            tag: 'new',
            name: 'Shirt 1',
            brand: 'A&L',
            model: 'male',
            price: '$ 7',
            image: { src: '../../../picture/men2.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '3',
            tag: '',
            name: 'Shirt 2',
            brand: 'A&L',
            model: 'male',
            price: '$ 8',
            image: { src: '../../../picture/men3.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '4',
            tag: '',
            name: 'Jacket 2',
            brand: 'A&L',
            model: 'male',
            price: '$ 5',
            image: { src: '../../../picture/men4.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '5',
            tag: '',
            name: 'Jacket 3',
            brand: 'A&L',
            model: 'male',
            price: '$ 6',
            image: { src: '../../../picture/men5.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '6',
            tag: '',
            name: 'Coat 1',
            brand: 'A&L',
            model: 'male',
            price: '$ 9',
            image: { src: '../../../picture/men6.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '7',
            tag: 'sale',
            name: 'Shirt 3',
            brand: 'A&L',
            model: 'male',
            price: '$ 7',
            image: { src: '../../../picture/men7.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '8',
            tag: 'sale',
            name: 'Jacket 4',
            brand: 'A&L',
            model: 'male',
            price: '$ 4',
            image: { src: '../../../picture/men8.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '9',
            tag: 'last one',
            name: 'Sweater',
            brand: 'A&L',
            model: 'female',
            price: '$ 4',
            image: { src: '../../../picture/women1.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '10',
            tag: '',
            name: 'Skirt',
            brand: 'A&L',
            model: 'female',
            price: '$ 3',
            image: { src: '../../../picture/women2.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '11',
            tag: 'new',
            name: 'Coat 2',
            brand: 'A&L',
            model: 'female',
            price: '$ 11',
            image: { src: '../../../picture/women3.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '12',
            tag: 'last one',
            name: 'Costume',
            brand: 'A&L',
            model: 'female',
            price: '$ 16',
            image: { src: '../../../picture/women4.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '13',
            tag: '',
            name: 'Dress 1',
            brand: 'A&L',
            model: 'female',
            price: '$ 10',
            image: { src: '../../../picture/women5.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '14',
            tag: '',
            name: 'Shirt 4',
            brand: 'A&L',
            model: 'female',
            price: '$ 12',
            image: { src: '../../../picture/women6.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '15',
            tag: 'sale',
            name: 'Dress 2',
            brand: 'A&L',
            model: 'female',
            price: '$ 13',
            image: { src: '../../../picture/women7.jpg'},
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '16',
            tag: 'sale',
            name: 'Dress 3',
            brand: 'A&L',
            model: 'female',
            price: '$ 14',
            image: { src: '../../../picture/women8.jpg'},
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