import { Router } from "express"; 
import ProductManager from '../ProductManager.js'

const productManager = new ProductManager('/files/products.json')

const router = Router()

// Products

// products all

router.get('/',(req, res) => {
 
    const products = productManager.getProducts(req.query.limit)
    res.json({ message: 'productos encontrados', products })
  
  })
  
  // product one
  
  router.get('/:idProduct', (req, res) => {
    const { idProduct } = req.params
    const product = productManager.getProductById(parseInt(idProduct))
    if(product){
        res.json({ message: 'producto encontrado', product })
    } else {
      res.status(400).send('Usuario no existe')
    }
  })
  
  // add product
  
  router.post('/',(req,res)=>{
      const product = req.body
      console.log(product)
      productManager.addProduct(product)
      res.send('Producto agregado')
  }
  )
  
  // delete products
  
  router.delete('/product/:idProduct',(req,res)=>{
      const {idProduct} = req.params
      productManager.deleteProduct(parseInt(idProduct))
      res.send('Product eliminado')
  })
  
  // delete all products
  
  router.delete('/product',(req,res)=>{
      productManager.deleteAllProducts(req.query)
      res.send('Usuarios eliminados')
  })

export default router

