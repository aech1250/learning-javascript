/*
    this => reference to the object where THIS is used
            (object depends upon immediate context)
            
            person.name = this.name
*/

const person1 = {
    name: "Garfield",
    favFood: "Lasagna",
    sayHello: function () {
        console.log(`Hey, This is me, ${this.name}.`)
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}.`)
    }
}

const person2 = {
    name: "Ben 10",
    favFood: "Chili Fries",
    sayHello: () => {
        console.log(`Hey, This is me, ${this.name}.`)
    },
    eat: () => {
        console.log(`${this.name} is eating ${this.favFood}.`)
    }
}


person1.eat();
person2.eat();