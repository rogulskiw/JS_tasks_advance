class Stock {
    constructor(symbol, price){
        this.symbol = symbol; 
        this.price = price;
        this.quantity = 0;
    }
    
    buy(quantity){
        this.quantity += quantity;
    }
    
    sell(selling){
        if(this.quantity>=selling){
            this.quantity-=selling;
            return true;
        } else {
            return false; 
        }
    }
}

const stock1 = new Stock('AAPL', 150);
const stock2 = new Stock('GOOGL', 2500);
const stock3 = new Stock('MSFT', 300);

console.log(`Spolka: ${stock1.symbol}, Cena: ${stock1.price}, Ilosc: ${stock1.quantity}`);
console.log(`Spolka: ${stock2.symbol}, Cena: ${stock2.price}, Ilosc: ${stock2.quantity}`);
console.log(`Spolka: ${stock3.symbol}, Cena: ${stock3.price}, Ilosc: ${stock3.quantity}`);

stock1.buy(10);
stock2.buy(5);
stock3.buy(8);
stock2.sell(2);
stock1.sell(5);
stock3.sell(10);

console.log(`Spolka: ${stock1.symbol}, Cena: ${stock1.price}, Ilosc: ${stock1.quantity}`);
console.log(`Spolka: ${stock2.symbol}, Cena: ${stock2.price}, Ilosc: ${stock2.quantity}`);
console.log(`Spolka: ${stock3.symbol}, Cena: ${stock3.price}, Ilosc: ${stock3.quantity}`);