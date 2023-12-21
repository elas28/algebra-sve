### Task
Exploring `call`, `apply`, and `bind` in JavaScript

### Objective
Practice using the `call`, `apply`, and `bind` methods in JavaScript to manipulate the context of a function and pass arguments dynamically.

### Scenario
You are building a small application that simulates a restaurant. You have a `chef` object with methods to prepare various dishes, and you also have a `waiter` object responsible for taking orders and serving dishes. In this exercise, you will explore how to use `call`, `apply`, and `bind` to coordinate the actions of the chef and waiter.

### Instructions
1. Create a `chef` object with the following methods:
   - `prepareDish(dishName)`: Logs a message indicating that the chef is preparing the specified dish.

2. Create a `waiter` object with the following methods:
   - `takeOrder(tableNumber, dishName)`: Logs a message indicating that the waiter is taking an order for a dish at a specific table.
   - `serveDish(tableNumber, dishName)`: Logs a message indicating that the waiter is serving a dish to a specific table.

3. Create a function `placeOrder` that takes `tableNumber`, `dishName`, and `chef` as parameters and simulates the process of taking an order and serving a dish by calling appropriate methods of the `waiter` and `chef` objects. Use the `call` or `apply` method to ensure that the correct context is used when calling these methods.

4. Use the `bind` method to create a partially applied function named `orderSteak` that can be used to place orders for steak dishes. The `orderSteak` function should only require the `tableNumber` parameter when invoked.

### Hints
- The `call` and `apply` methods can be used to invoke a function with a specific `this` context and additional arguments.
- The `bind` method can be used to create a new function with a fixed `this` value and optionally, some pre-defined arguments.