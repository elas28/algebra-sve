/**************************************************
 * FUNCTIONAL PROBLEM (DRY) - TO BE REFACTORED IN CLASSES
**************************************************/

function calculateVIPprice(price) {
    const discount = 10;
    return price - (price * discount) / 100;
}

function calculateWholeSaleprice(price) {
    const discount = 20;
    return price - (price * discount) / 100;
}

// Functional way
/**
 * What is Keep It Simple, Stupid (KISS)? 
 * Keep it simple, stupid (KISS) is a design principle which states that designs and/or systems should be as simple as possible.
 */
const discounts = {
    vip: 10,
    wholesale: 20,
};

function calculatePrice(productPrice, type) {
    return productPrice - (productPrice * discounts[type]) / 100;
}

console.log(calculatePrice(100, 'vip'));


// OOP Way Of Solving
class Customer {
    constructor(discount) {
        this.discount = discount;
    }

    calculatePrice(price) {
        const discountNumber = (price * this.discount) / 100;
        return price - discountNumber;
    }
}

class VIPCustomer extends Customer {
    constructor() {
        super(10);
    }
}

class WholesaleCustomer extends Customer {
    constructor() {
        super(20);
    }
}

const vipCustomer = new VIPCustomer();
console.log(vipCustomer.calculatePrice(150));