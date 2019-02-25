// console.log("App.js loaded");


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



        // listAnimation.restart();
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
// 
// var carouselAnimation = anime({
//   targets: ['.carousel-image', '.carousel-quote'],
//   duration: 1300,
//   opacity: [0, 1],
//   easing: 'easeOutCubic',
//   autoplay: true
// });
//
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
