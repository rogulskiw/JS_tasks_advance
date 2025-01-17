class Product {
    constructor(id, name, price) {
        this.id = id; 
        this.name = name; 
        this.price = price;
    }
}

class ShoppingCart {
    constructor(){
        this.products = [];
    }
    
    addProduct(product){
        this.products.push(product);
    }
    
    getTotalPrice(){
       return this.products.reduce((total, product) => total + product.price, 0);
    }
    
    removeProduct(productId) {
       this.products = this.products.filter(
           (product) => product.id !== productId
       );
   }
    
    checkout(){
        const totalPrice = this.getTotalPrice();
        console.log(`Zamowienie zlozone. Calkowity koszt: ${totalPrice} zl`);
    }
}


const product1 = new Product(1, 'Koszulka', 29.99);
const product2 = new Product(2, 'Spodnie', 59.99);
const product3 = new Product(3, 'Buty', 99.99);

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);


console.log('Produkty w koszyku:');
shoppingCart.products.forEach((prod) => {
   console.log(`- ${prod.name} (${prod.price} zl)`);
});

shoppingCart.checkout();