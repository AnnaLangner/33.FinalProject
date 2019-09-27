const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/home', (req, res) => {
    const data = [
        {id: 'man(1)', name: 'Product 1', brand: 'A&L', model: 'male', picture: 'man(1)', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
        {id: 'man(2)', name: 'Product 2', brand: 'A&L', model: 'male', picture: 'man(2)', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
    ];
    res.json(data);
});

app.listen(8000, function () {
    console.log('Server is running on port: ', 8000);
});