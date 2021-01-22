
class Store {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.prices= {};
        this.stock= {};
         this.totalSales = 0;
        //console.log(this.items);
    }
    isItemAvailable(name) {
        var itemIndex = this.items.indexOf(name);
        if(itemIndex == -1) {
            return false;
        }
        else {
            return true;
        }

    }
    getPrice(name) {
        var isAvailabe = this.isItemAvailable(name);
        if(isAvailabe == true) {
            var itemPrice = this.prices[name];
            return itemPrice;
        }
        else {

           return "Sorry. We dont have this item";
        }
    }
    
    getTotalSale() {
        return this.totalSales;
    }
    
    sellItem(name , quantity) {
        var available= this.stock[name]; 
        if(available < quantity) {
            return 'Sorry!, we do not have enough';
        }
        else {
            var itemPrice = this.getPrice(name);
            var currentSale = itemPrice * quantity;
            this.totalSales = this.totalSales + currentSale;
            var remaining = available - quantity;
            this.stock[name] = remaining;
            console.log("thanks for your purcase");
        }

    }
    addItem(name, quantity, price) {

        var isExisting = this.isItemAvailable(name);
        if(isExisting == true) {
            var available = this.stock[name];
            this.stock[name]=available + quantity; 
        }
        else {
            this.items.push(name);
            this.prices[name] = price;
            this.stock[name] = quantity;
        }
    }
   
}
let jalalStore = new Store("Jalal's dream shop");
    jalalStore.addItem('shirt',40, 300); //adding 40 shirt with price 300
    jalalStore.addItem('pant',20, 500); //adding 20 pant with price 500

    console.log(jalalStore.isItemAvailable('juta'));
    console.log(jalalStore.isItemAvailable('shirt'));
    
    jalalStore.addItem('juta',10, 200); //adding 10 juta with price 200

    console.log(jalalStore.isItemAvailable('juta'));

    console.log(jalalStore.getTotalSale()); //calling getTotalSale method

    jalalStore.sellItem('juta',5); //selling 5 juta

    console.log(jalalStore.getTotalSale());  //calling getTotalSale method

    jalalStore.sellItem('shirt',7); //selling 5 juta

    console.log(jalalStore.getTotalSale()); //calling getTotalSale method
