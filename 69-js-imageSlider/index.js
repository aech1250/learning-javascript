const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlides);


function initializeSlides(){

    if(slides.length > 0){

        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    
}

function showSlides(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}

function previousSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlides(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlides(slideIndex);
}