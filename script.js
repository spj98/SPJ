// Add a click event listener to the navigation menu items
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var sectionId = this.getAttribute('href');
    var section = document.querySelector(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
  });
});
