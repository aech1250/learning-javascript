/*
    static keyword => is a keyword that defines properties or methods that belongs
                      to a class itself rather then the object created from that
                      class (class owns anything static, not the objects)
*/

// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return 2 * radius;
//     }
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius) {
//         return this.PI * (radius ** 2);
//     }
// }

// let diameter = MathUtil.getDiameter(2.5);
// let circumference = MathUtil.getCircumference(2.5);
// let area = MathUtil.getArea(2.5);

// console.log(diameter);
// console.log(circumference);
// console.log(area);

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`Total numbers of users are ${User.userCount}.`);
    }
    sayHello() {
        console.log(`Hello, My username is ${this.username}`);
    }
}

const user1 = new User("Hassan");
const user2 = new User("Adeel");
const user3 = new User("Muneeb");

user3.sayHello();
User.getUserCount();
console.log(User.userCount);
