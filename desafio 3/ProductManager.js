import fs from 'fs';

export default class ProductManager {
    constructor(path) {
        this.path = path;
    }
    getProducts() {
        if (fs.existsSync(this.path)) {
            const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
            console.log('Producto ya existe');
            return products
        }
        else {
            console.log('producto no econtrado');
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Rellene campo')
        } else {

            if (this.checkCode(code)) {
                console.log('Codigo ya existe')
            }

            else {

                const product = {
                    id: this.addId(),
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }

                const productsFile = this.getProducts()
            productsFile.push(product)
            fs.writeFileSync(path, JSON.stringify(productsFile));
            }
        }
    }

    getProductById(id) {
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        return (products.find(product => product.id === id)) || 'Not found'
    }

    updateProduct(id,changeProduct){
    const products = this.getProducts()
    if(products.find(product => product.id === id)){
        console.log(changeProduct);
        console.log('id encontrado');
    }
    else{
    console.log('id no encontrado');
    }
    }

    deleteProduct(id){
        const products = this.getProducts()
        const newList = products.filter((product) => product.id !== id)
        fs.writeFileSync(path, JSON.stringify(newList))
        console.log('producto eliminado');
    }


    checkCode(cCode) {
        return this.products.find((product) => product.code === cCode)
    }

    addId() {
        let id = 1
        if (this.products.length !== 0) {
            id = this.products[this.products.length - 1].id + 1
        }
        return id
    }

}