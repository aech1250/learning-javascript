// while loop => repeat some code while a condition is true

// let userName = "";

// while (userName === "" || userName === null) {
//   userName = window.prompt("Enter Username: ");
// }

// console.log(`Hello, ${userName}`);

let isLoggedIn = false;
let userName;
let password;

while (!isLoggedIn) {
  userName = window.prompt("Enter username: ");
  password = window.prompt("Enter Password: ");

  if (userName === "aech1250" && password === "090078601") {
    window.alert(`Welcome! ${userName}`);
    isLoggedIn = true;
  } else {
    window.alert(`Invalid Username or Password. Try Again!`);
  }
}
