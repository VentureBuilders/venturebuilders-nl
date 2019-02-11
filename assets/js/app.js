console.log("App.js loaded");


// ==============================
// Expertise Accordion Animation

const accordionTitles = document.querySelectorAll('.accordion-title');
let accordionActive = [];


accordionTitles.forEach(function (element) {
    element.addEventListener('click', function() {
        accordionActive = [];
        var active = this.dataset.list;
        var listSet = document.querySelectorAll('[data-list]');
        // console.log(listSet);

        listSet.forEach(function(element) {
            if (element.dataset.list === active) {
                element.classList.toggle('show');
                accordionActive.push(element);
            }
        });

        listAnimation.restart();
        console.log(accordionActive);
    });
});


// ==============================
// Venture Grid Animations

// var revealText = anime({
//     targets: '.reveal-text',
//     duration: 300,
//     easing: 'easeOutExpo',
//     delay: 200,
//     opacity: [0, 1],
//     translateY: ['-20px', '0px'],
//     autoplay: false
// })


var block = document.querySelectorAll('.reveal');

block.forEach(function(element) {
    // var slices = element.children[1].children;
    element.addEventListener("mouseenter", function() {
        // var slices = this.querySelectorAll('.reveal-slice');
        element.classList.add('hover');
        // reveal(slices);
    })

    element.addEventListener("mouseleave", function() {

        element.classList.remove('hover');
        // outro(slices);
    })
});

function reveal(elements) {

    var revealSlice = anime({
        targets: elements,
        duration: 500,
        easing: 'easeOutExpo',
        delay: anime.stagger(100, {start: 0}),
        translateY: '0%',
        autoplay: true
    });
}

function outro(elements) {
    var revealSlice = anime({
        targets: elements,
        duration: 300,
        easing: 'easeOutExpo',
        delay: anime.stagger(50, {start: 0}),
        translateY: '-100%',
        autoplay: true
    });
}



// ==============================
// Carousel Animation

var carouselAnimation = anime({
  targets: ['.carousel-image', '.carousel-quote'],
  duration: 1300,
  opacity: [0, 1],
  easing: 'easeOutCubic',
  autoplay: true
});


var listAnimation = anime({
    targets: accordionActive,
    duration: 500,
    delay: anime.stagger(30),
    translateX: ['-0.5em', 0],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    autoplay: false,
});
