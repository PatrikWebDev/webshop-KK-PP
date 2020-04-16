const express = require('express');
const cors = require('cors')

const DbAdapter = require('./adapter/sqlite3-adapter')
const productsRepository = require('./repository/products-repository')
const ProductsController = require('./controller/products-controller')
const productsController = new ProductsController( new productsRepository( new DbAdapter() ) )

const app = express();
app.use(cors())
const port = 3000;

app.get('/products', productsController.findProducts.bind(productsController))


app.listen(port, () => console.log(`Example app listening on port ${port}!`));