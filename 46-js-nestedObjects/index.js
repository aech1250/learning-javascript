/*
    nested objects => Objects inside of other Objects
                      Allows you to represent more complex data structure
                      Child object is enclosed by a Parent object

                      Parent{Address{}, ContactInfo{}}
                      ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

// const person1 = {
//     fullName: "Hassan Amir",
//     age: 21,
//     isStudent: true,
//     address: {
//         street: "Nishat Road",
//         city: "Multan",
//         country: "Pakistan"
//     }
// }

// console.log(person1.fullName)
// console.log(person1.age)
// console.log(person1.isStudent)
// console.log(person1.address.street)
// console.log(person1.address.city)
// console.log(person1.address.country)

class Person {

    constructor(fullName, age, isStudent, ...address) {
        this.fullName = fullName;
        this.age = age;
        this.isStudent = isStudent;
        this.address = new Address(...address);
    }
}

class Address {

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Hassan Amir", 21, true, "Nishad Road", "Multan", "Pakistan");
const person2 = new Person("Doggy", 74, false, "Nishad Road", "Multan", "Pakistan");


console.table(person2);