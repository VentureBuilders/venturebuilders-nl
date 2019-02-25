console.log("App.js loaded");


// ==============================
// Expertise Accordion Animation

const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(function (element) {
    element.addEventListener('click', function() {
        var active = this.dataset.list;
        var listSet = document.querySelectorAll('[data-list]');

        listSet.forEach(function(element) {
            if (element.dataset.list === active) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });

    });
});


// ==============================
// Venture Grid Animations


var block = document.querySelectorAll('.reveal');

block.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        element.classList.add('hover');
    })

    element.addEventListener("mouseleave", function() {
        element.classList.remove('hover');
    })
});



// ==============================
// Carousel Animation
const carouselArrow = document.getElementById("car-arrow");
const carouselQuotes = document.querySelectorAll(".carousel-quote");
const carouselImages = document.querySelectorAll(".carousel-image-item");

let carActive = 0;

carouselArrow.addEventListener("click", function(event) {
	// console.log("hit", this);
	event.preventDefault();

	getActive(carouselQuotes).classList.remove('show');
	getActive(carouselImages).classList.remove('show');

	if (carActive >= (carouselQuotes.length - 1)) {
		carActive = 0;
		console.log("reset count");
	} else {
		carActive++;
	}

	getActive(carouselQuotes).classList.add('show');
	getActive(carouselImages).classList.add('show');
});

getActive = function(set) {
	// console.log(carActive, set.length);
	return set[carActive];
}

getActive(carouselQuotes).classList.add('show');
getActive(carouselImages).classList.add('show');
//
// carouselImages.forEach(function(element) {
//
// 	console.log(element);
//
// });


var carouselAnimation = anime({
  targets: ['.carousel-image', '.carousel-quote'],
  duration: 1300,
  opacity: [0, 1],
  easing: 'easeOutCubic',
  autoplay: true
});

//
// var listAnimation = anime({
//     targets: accordionActive,
//     duration: 500,
//     delay: anime.stagger(30),
//     translateX: ['-0.5em', 0],
//     opacity: [0, 1],
//     easing: 'easeOutCubic',
//     autoplay: false,
// });
