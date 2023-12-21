class ShoppingCart {
    constructor() {
        this.cart = [];
        this.totalPrice = 0;
    }

    addItemToCart(item) {
        this.cart.push(item);
        this.totalPrice += item.price;
    }

    removeItemFromCart(item) {
        const index = this.cart.indexOf(item);
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.totalPrice -= item.price;
        }
    }

    checkout() {
        console.log('Checking out...');
        console.log('Cart Items:');
        this.cart.forEach((item) => console.log(`${item.name}: $${item.price}`));
        console.log(`Total Price: $${this.totalPrice}`);
    }
}

// Instantiate the ShoppingCart class
const cart = new ShoppingCart();

// Sample usage
const item1 = { name: 'iPhone 15 Pro max', price: 1999 };
const item2 = { name: 'MacBook Pro M2 Max', price: 2499 };
const item3 = { name: 'Apple AirTag', price: 29 }

cart.addItemToCart(item1);
cart.addItemToCart(item2);
cart.removeItemFromCart(item1);
cart.addItemToCart(item3);
cart.checkout();