class ProductManager{
    constructor(){
        this.products = []
    }
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){

        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Rellene campo')
        } else {

            if(this.checkCode(code)){
                console.log('Codigo ya existe')
            }

            else{

            const product = {
                id: this.addId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }

            this.products.push(product)
        }
         }   
        } 

   getProductById(id){
            return (this.products.find(product => product.id === id)) || 'Not found'
        }

        checkCode(cCode) {
            return this.products.find((product) => product.code === cCode)
        }

        addId(){
            let id =1
            if (this.products.length!==0){
                id = this.products[this.products.length-1].id + 1
            }
            return id
        }

}

const productManager1 = new ProductManager();
productManager1.addProduct("zapatilla nike ","Description..",100,"https://nike.com","12345",40)
productManager1.addProduct("zapatilla puma","Description..",600,"https://puma.com","1234",20)
productManager1.addProduct("zapatilla adidas","Description..",300,"https://adidas.com")//rellenar campo
productManager1.addProduct("zapatilla umbro","Description..",100,"https://umbro.com","1234",50)//ya existe
console.log(productManager1.getProductById(3))
console.log(productManager1.getProductById(4))
console.log(productManager1.getProducts())
//
