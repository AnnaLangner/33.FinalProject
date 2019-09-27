//get all products

exports.getProducts = function (req, res) {
    const data = [
        {id: 'man(1)', name: 'Product 1', brand: 'A&L', model: 'male', picture: 'man(1)', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
        {id: 'man(2)', name: 'Product 2', brand: 'A&L', model: 'male', picture: 'man(2)', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    ];
    res.json(data);
};