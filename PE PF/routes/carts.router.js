import { Router } from "express"; 
import CartManager from "../CartManager.js";

const cartManager = new CartManager('/files/carts.json')

const router = Router()

router.post('/',(req,res)=>{
    const cart = req.body
    console.log(cart)
    cartManager.addCart(cart)
    res.send('Producto agregado al carrito')
}
)
router.get('/:cid', (req, res) => {
    const { idCart } = req.params
    const cart = cartManager.getCartById(parseInt(idCart))
    if(product){
        res.json({ message: 'carrito encontrado', cart })
    } else {
      res.status(400).send('carrito no existe')
    }
  })

router.post('/:cid/product/:pid ', (req,res) =>{

    const { idCart , pId } = req.params
    const cart = cartManager.getCartById(parseInt(idCart))
    if(cart){
        res.json({ message: 'carrito encontrado', cart })
        cartManager(pId, 1, idCart)
    } else {
      res.status(400).send('carrito no existe')
    }

})

export default router