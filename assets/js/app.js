console.log("App.js loaded");

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


var block = document.querySelectorAll('.v-block');

block.forEach(function(element) {
  element.addEventListener("mouseover", function() {
    element.classList.add('hover');
  })
});

block.forEach(function(element) {
  element.addEventListener("mouseout", function() {
    element.classList.remove('hover');
  })
});


var blockAnimation = anime({
    targets: '.v-block',
    duration: 600,
    autoplay: false,
    easing: 'easeOutCubic',

})

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
