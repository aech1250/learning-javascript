//----------------------Example 1 <h1>-----------------------
//Step 1 create the element

const newH1 = document.createElement("h1");
//Step 2 Add attribute/properties


newH1.textContent = "I love pizza.";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center"

//Step 3 Append element to DOM

// document.body.prepend(newH1);
// document.body.append(newH1);
// document.getElementById(`box1`).prepend(newH1);

// let i = 1;
// setInterval(() => {
//     i = i % 5 == 0 ? 1 : i % 5;
//     document.getElementById(`box${i}`).prepend(newH1);
//     i++;
// }, 1000)

// const box1 = document.getElementById("box1")
// document.body.insertBefore(newH1, box1);

// const boxes = document.querySelectorAll("#box1");

// boxes[0].prepend(newH1);

//Remove HTML Element()

// document.getElementById("box1").removeChild(newH1);

//----------------------Example 2 <li>-----------------------
//Step 1 create the element

const newListItem = document.createElement("li");

//Step 2 Add attribute/properties

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightGreen";

//Step 3 Append element to DOM

document.body.append(newListItem)
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

// const secondElement = document.getElementById("orange");
const listItems = document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newListItem, listItems[4]);

//Remove HTML Element()


