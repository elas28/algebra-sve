let cart = [];
let totalPrice = 0;

function addItemToCart(item) {
    cart.push(item);
    totalPrice += item.price;
}

function removeItemFromCart(item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        totalPrice -= item.price;
    }
}

function checkout() {
    console.log('Checking out...');
    console.log('Cart Items:');
    cart.forEach((item) => console.log(`${item.name}: $${item.price}`));
    console.log(`Total Price: $${totalPrice}`);
}

// Sample usage
const item1 = { name: 'iPhone 15 Pro max', price: 1999 };
const item2 = { name: 'MacBook Pro M2 Max', price: 2499 };
const item3 = { name: 'Apple AirTag', price: 29 }

addItemToCart(item1);
addItemToCart(item2);
removeItemFromCart(item1);
addItemToCart(item3);
checkout();
