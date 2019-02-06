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


anime({
  targets: ['.carousel-image', '.carousel-quote'],
  duration: 1300,
  opacity: [0, 1],
  easing: 'easeOutCubic'
});
