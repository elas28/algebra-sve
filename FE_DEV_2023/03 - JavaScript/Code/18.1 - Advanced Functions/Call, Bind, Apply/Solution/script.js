const chef = {
    prepareDish(dishName) {
        console.log(`Chef is preparing ${dishName}`);
    }
};

const waiter = {
    takeOrder(tableNumber, dishName) {
        console.log(
            `Waiter is taking an order for ${dishName} at table ${tableNumber}`
        );
    },
    serveDish(tableNumber, dishName) {
        console.log(`Waiter is serving ${dishName} to table ${tableNumber}`);
    },
};

function placeOrder(dishName, tableNumber, chef) {
    // Simulate the order placement process
    waiter.takeOrder.call(waiter, tableNumber, dishName);
    chef.prepareDish.call(chef, dishName);
    waiter.serveDish.call(waiter, tableNumber, dishName);
}

const orderSteak = placeOrder.bind(null, 'Steak');

// Test the functionality
placeOrder('Pasta', 1, chef);
orderSteak(2, chef);