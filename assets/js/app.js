const accordionTitles = document.querySelectorAll('.accordion-title');


function showList(element) {
    // console.log(element);
    // element.classList.toggle('show');
}


accordionTitles.forEach(function (element) {
    element.addEventListener('click', function() {
        console.log(this);
        this.classList.toggle('show');
    });
});
