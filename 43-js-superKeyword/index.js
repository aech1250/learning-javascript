/*
    super keyword => a reference to the parent, is used in class to call a constructor
                     or access the property or methods of a 
                     parent (super class)

                     this = this object
                     super = the parent
*/

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`The ${this.name} is moving at speed of ${speed} Mph.`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run.`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}


const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 15);
const hawk = new Hawk("hawk", 3, 50);

//console.table(rabbit);

hawk.fly();