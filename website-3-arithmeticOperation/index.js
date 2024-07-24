// Arithmetic Operations = Operands    (values, variables, etc)
//                         Operators   (+, -, *, /, %, **)
//                         exampli gratia., x = x + 1

let students = 10; // Lets say in a class we have 30 students

// Addition Operator
// students = students + 1; // To add a student to the 

// Subtration Operator
// students = students - 1; // To remove a student from the class

// Multiplication Operator
// students = students * 2; // To double the number of students in class

// Division Operator
// students = students / 2; // To split the students in class

// Exponential Operator
// studnets = students ** 2; // May be a seminar.

// Modulo Operator => Give the remainder.
// let remainingStudents = students % 3; // To see if there is any student remaining if we divide student
                                      // in groups of 3

// Augmented Assignment Operators
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// Increment Operator
// students++;

// Decrement Operator
// students--;

// Operator Precedence
// 1. Parenthesis ()
// 2. Exponents
// 3. Multiplication, Division & Modulo
// 4. Addition & Subtraction

let result = 1 * 2 - 4 / 2 ** 3 + 1;
    console.log(`The result is: ${result}`); // Exponent, Multiplication, Dividition, Addition, Subtraction
    result = 6 / 2 ** (2 + 5);
    console.log(`The result is: ${result}`); // Parenthesis, Exponent, Division