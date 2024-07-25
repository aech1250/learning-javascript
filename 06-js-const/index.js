// const => a variable that never changes
//          It is a convertion to name the
//          const of primitive datatype
//          (number, boolean) all caps.
//          exampli gratia., PI = 22/7;

const PI = 3.14159;
let radius;
let circumference;

    document.getElementById("submitInput").onclick = function(){
        radius = document.getElementById("radiusInput").value;
        radius = Number(radius);
        circumference = 2 * PI * radius;
        document.getElementById("displayCircumference").textContent = `Circumference: ${circumference}cm`;
    }
