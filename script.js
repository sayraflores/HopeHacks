function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('ckng4qPlLNlAPFv0D');
})();

window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

 // SLIDESHOW STARTS HERE// 

const carouselSlide = document.querySelector('.carousel-slide') // selecting div on html file//
const carouselImages = document.querySelectorAll('.carousel-slide img') // selecting all of the images on slideshow// 

// buttons
const prevButtons = document.querySelector('#prevButton');
const nextButtons = document.querySelector('#nextButton');

// to monitor what image we are we need some sort of counter // 
let counter = 1;



