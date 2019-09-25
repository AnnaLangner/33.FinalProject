const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/home', (req, res) => {
    const data = [
        {id: 'man(1)', brand: 'A&L', model: 'male', picture: 'man(1)'},
        {id: 'man(2)', brand: 'A&L', model: 'male', picture: 'man(2)'},
    ];
    res.json(data);
});

app.listen(8000, function () {
    console.log('Server is running on port: ', 8000);
});