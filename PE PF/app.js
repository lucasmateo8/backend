import express from 'express';
import ProductManager from './ProductManager.js';

const app = express()
const PORT = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productManager = new ProductManager('./files/products.json')

app.get('/products', (req, res) => {
  let limit = req.query.limit;
  if(limit) {
    let products = productManager.getProducts();
    if(limit > products.length) {
      res.json(productManager.getProducts());
    }else{
    let newArr = [];
    for(let i = 0; i < limit; i++){
      newArr.push(products[i]);
    }
    res.json(newArr);
    }
  }else{
    console.log(limit)
    res.json(productManager.getProducts());
  }
})

app.get('/products/:pid', (req, res) => {
  const { pid } = req.params
  const product = productManager.getProductById(parseInt(pid))
  if(product){
      res.json({ message: 'producto encontrado', product })
  } else {
    res.status(400).send('Usuario no existe')
  }
})

const server = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
})

server.on('error', err => {
  console.log(err);
})