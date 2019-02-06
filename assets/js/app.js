// const anime = require('vendor/anime.min.js');
const accordionTitles = document.querySelectorAll('.accordion-title');


function showList(element) {
    // console.log(element);
    // element.classList.toggle('show');
}

console.log("App.js loaded");

accordionTitles.forEach(function (element) {
    element.addEventListener('click', function() {
        // console.log(this);
        this.classList.toggle('show');
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
  autoplay: false
});
