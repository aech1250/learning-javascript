/* 
    Objects => a collection of related properties and or methods
               Can represent real world object (people, products, places)

               Object = {
                    key: value
                    method(){}
               }
*/

const friend1 = {
    firstName: "Arshad",
    lastName: "Ali",
    age: 20,
    isStudent: true,
    sayHi: function () {
        console.log(`Hi. I'm Arshad. Fuck me.`)
    },
    eat: () => console.log(`I am eating kela.`)
}

const friend2 = {
    firstName: "Muneeb",
    lastName: "Rehman",
    age: 20,
    isStudent: true,
    sayHi: () => console.log(`Hi, I'm Muneeb. Nice to meet you.`),
    eat: () => console.log(`I am eating Biryani.`)
}

friend1.sayHi();
friend1.eat();
friend2.sayHi();
friend2.eat();

// console.log(friend1.firstName);
// console.log(friend1.lastName);
// console.log(friend1.age);
// console.log(friend1.isStudent);
// console.table(friend1);

// console.log(friend2.firstName);
// console.log(friend2.lastName);
// console.log(friend2.age);
// console.log(friend2.isStudent);
// console.table(friend2);

