// function myFunction() {
//     var x = document.getElementById("navBar");
//     if (x.className === "navbar") {
//         x.className += " responsive";
//     } else {
//         x.className = "navbar";
//     }
// }


//  // SLIDESHOW STARTS HERE// 

// const carouselSlide = document.querySelector('.carousel-slide') // selecting div on html file//
// const carouselImages = document.querySelectorAll('.carousel-slide img') // selecting all of the images on slideshow// 

// // buttons
// const prevButton = document.querySelector('#prevButton');
// const nextButton = document.querySelector('#nextButton');

// // to monitor what image we are on we need some sort of counter // 
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)'; // allows for slideshow to start on first image and not on duplicate //

// // button listeners

// nextButton.addEventListener('click', () => {

//     carouselSlide.style.transition = 'transform 0.4s ease-in-out'; // adds transition to next button //
//     counter ++;
//     carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)';

// });


// prevButton.addEventListener('click',() => {

//     carouselSlide.style.transition = 'transform 0.4s ease-in-out'; // adds transition to next button //
//     counter --;
//     carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)';
    
// });



// // an event listener that triggers after transition finishes
// carouselSlide.addEventListener('transitionend', () => {
//     console.log(carouselImages[counter]);
//         if(carouselImages[counter].id === "lastClone") {
//             // take off transition to translate to first image (starts over)
//               counter = carouselImages.length -2; // updates counter and takes away repeated images//
//               carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)';

//         }
//     })


// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');
// //Buttons
// const previousBtn = document.querySelector('#prevButton');
// const nextBtn = document.querySelector('#nextButton');
// //Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;


// carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

// nextBtn.addEventListener('click',()=>{
//     if(counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = 'transform 0.2s ease-in-out';
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
// });

// previousBtn.addEventListener('click',()=>{
//     if(counter <= 0) return;
//     carouselSlide.style.transition = 'transform 0.2s ease-in-out';
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
// });


// carouselSlide.addEventListener('transitionend',()=>{
//     if(carouselImages[counter].id === 'lastClone'){
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length -2;
//         carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//     }})



    // function myFunction() {
//     var x = document.getElementById("navBar");
//     if (x.className === "navbar") {
//         x.className += " responsive";
//     } else {
//         x.className = "navbar";
//     }
// }


//  // SLIDESHOW STARTS HERE// 


 // SLIDESHOW STARTS HERE// 


const carouselSlide = document.querySelector('.carousel-slide') // selecting div on html file//
const carouselImages = document.querySelectorAll('.carousel-slide img') // selecting all of the images on slideshow// 

// buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

// to monitor what image we are on we need some sort of counter // 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)'; // allows for slideshow to start on first image and not on duplicate //

// button listeners

nextButton.addEventListener('click', () => {
if (counter >= carouselImages.length -1 ) return; // returns to image
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'; // adds transition to next button //
    counter ++; // count up 1 
    carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)';

});


prevButton.addEventListener('click',() => {
if(counter <= 0) return; // helps with going back to the last image 
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'; // adds transition to previous button //
    counter --; // counts backwards
    carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)';
    
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2; // takes away last 2 images
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    }
});

console.log(carouselImages.length);



// an event listener that triggers after transition finishes
carouselSlide.addEventListener('transitionend', () => {
    console.log(carouselImages[counter]);
        if(carouselImages[counter].id === "lastClone") {
            // take off transition to translate to first image (starts over)
              counter = carouselImages.length -2; // updates counter and takes away repeated images//
              carouselSlide.style.transform = 'translateX(' + ( - size * counter) + 'px)';


        }
    })



