const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

// fruits.push({name: "grapes", color: "green", calories: 62})
// fruits.pop();
// fruits.splice(1, 3);

// for(const fruit in fruits){
//     console.log(fruits[fruit].name, fruits[fruit].color, fruits[fruit].calories);
// }

// fruits.forEach((fruit) => console.log(fruit.color))

// const fruitNames = fruits.map(fruit => {
//                                 return fruit.name;
//                             });
// const fruitColor = fruits.map(fruit => {
//                                 return fruit.color;
//                             });
// const fruitHealthly = fruits.filter(fruit => {
//                                         return fruit.calories < 100
//                                     });
const maxFruit = fruits.reduce( (max, fruit) => {
                                return fruit.calories > max.calories ? fruit : max;
                                } );
const minFruit = fruits.reduce( (min, fruit) => {
                                return fruit.calories < min.calories ? fruit : min;
                                } );


// console.log(fruitNames)
// console.log(fruitColor)
// console.log(fruitHealthly)
console.log(maxFruit.calories)
console.log(minFruit.calories)