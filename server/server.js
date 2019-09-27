const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

//import routes
const productRoutes = require('./routes/product.routes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', productRoutes);

app.listen(config.PORT, function () {
    console.log('Server is running on port: ', config.PORT);
});