function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}



 // SLIDESHOW STARTS HERE// 

const carouselSlide = document.querySelector('.carousel-slide') // selecting div on html file//
const carouselImages = document.querySelectorAll('.carousel-slide img') // selecting all of the images on slideshow// 

// buttons
const prevButtons = document.querySelector('#prevButton');
const nextButtons = document.querySelector('#nextButton');

// to monitor what image we are we need some sort of counter // 
let counter = 1;



