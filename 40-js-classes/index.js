/*
    classes => (ES6 feature) provides a cleaner and much more 
                structured way to work with objects and 
                compare to traditional constructor function
                ex. static keyword, encapsulation, inheritance.

*/

/*----------------Constructor Method----------------*/

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.displayProduct = function () {
//         console.log(`Product: ${this.name}.`);
//         console.log(`Price: ${this.price}.`);
//     }
//     this.calculateTotal = function (salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.25;
// const product1 = new Product("Shoe", 4000);

// product1.displayProduct();
// let total = product1.calculateTotal(salesTax);
// console.log(`Total: ${total}, including tax.`);


/*----------------------Classes---------------------*/
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}.`);
        console.log(`Price: ${this.price}.`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const SalesTax = 0.25;
const product1 = new Product("Airpod", 3500);

product1.displayProduct();
const total = product1.calculateTotal(SalesTax);
console.log(`Total: ${total}, including tax.`);