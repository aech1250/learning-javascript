const image = document.getElementById("myImage");
const btn = document.getElementById("myBtn");


btn.addEventListener("click",() => {
    btn.textContent= btn.textContent == "Hide" ? "Show" : "Hide";
    image.style.visibility = getComputedStyle(image).visibility == "visible" ? "hidden" : "visible";
})