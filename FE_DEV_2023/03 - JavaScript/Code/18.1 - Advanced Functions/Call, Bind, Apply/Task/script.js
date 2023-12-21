const chef = {
    prepareDish(dishName) {
        // Implement the chef's logic
    },
};

const waiter = {
    takeOrder(tableNumber, dishName) {
        // Implement the waiter's logic for taking an order
    },
    serveDish(tableNumber, dishName) {
        // Implement the waiter's logic for serving a dish
    },
};

function placeOrder(tableNumber, dishName, chef) {
    // Implement the order placement logic
}

// Create the partially applied function orderSteak using bind

// Test the functionality
placeOrder(1, 'Steak', chef);
placeOrder(2, 'Pasta', chef);
// Use the partially applied orderSteak function
