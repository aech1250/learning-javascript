// Type Conversion => changing the datatype of one variable to another 
//                    (string to number)
//                    (number to boolean)
//                    (boolean to string)
//                    etc.....


// Explicit Type Conversion

// Number To String
let num = 125;
let strFromNum = String(num); // "125" 
let strFromNum2 = num.toString(); // "125"
// Boolean To String
let bool = true;
let strFromBool = String(bool); // "true"

// String To Number
let str = "125";
let numFromStr = Number(str); // 125
let numFromStr2 = parseInt(str); // 125
let floatFromStr = parseFloat("125.45"); // 125.45
// Boolean To Number
let boolTrue = true;
let numFromBoolTrue = Number(boolTrue); // 1
let boolFalse = false;
let numFromBoolFalse = Number(boolFalse); // 0

// String To Boolean
let strNonEmpty = "hello";
let boolFromStrNonEmpty = Boolean(strNonEmpty); // true
let strEmpty = "";
let boolFromStrEmpty = Boolean(strEmpty); // false
// Number To Boolean
let numNonZero = 125;
let boolFromNumNonZero = Boolean(numNonZero); // true
let numZero = 0;
let boolFromNumZero = Boolean(numZero); // false

// Implicit Type Conversion

// To String
let implicitStr = "The number is " + 125; // "The number is 125"
let implicitStr2 = "Sum: " + 1 + 2; // "Sum: 12"

// To Number
let implicitNum1 = "6" / "2"; // 3
let implicitNum2 = "5" - 1; // 4
let implicitNum3 = "5" * 2; // 10
let implicitNum4 = "10" - "2"; // 8

