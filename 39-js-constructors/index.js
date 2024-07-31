/*
    constructor => special method for defining the properties
                   and method of objects
*/

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {
        console.log(`You drive a ${this.model}`)
    }
}

const car1 = new Car("Tesla", "Cybertruck", "2024", "Silver");

// console.table(car1)
car1.drive()