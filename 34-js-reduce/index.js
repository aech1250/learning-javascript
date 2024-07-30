/* 
    reduce() => reduce the elements of an array to a 
                single value.
*/

// const prices = [547, 393, 747, 507, 860, 167, 688, 60, 137, 825];

// console.log(`Total: $${prices.reduce(total)}`);

// function total(accumulator, element){
//      return accumulator + element
// }

let marks = [85, 92, 78, 88, 90, 77];

console.log(`Total Marks: ${marks.reduce(sum)}/600`);
console.log(`Minimun Marks: ${marks.reduce(getMin)}/100`);
console.log(`Maximun Marks: ${marks.reduce(getMax)}/100`);

function sum(a, e){
    return a + e;
}
function getMax(a, e){
    return Math.max(a, e);
}
function getMin(a, e){
    return Math.min(a, e);
}