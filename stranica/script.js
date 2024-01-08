// Your function to open the presentation
function openPresentation() {
  // Replace the URL with the actual URL of your presentation or file
  var presentationUrl = "enko prezentacija.docx";

  // Open the presentation in a new browser tab
  window.open(presentationUrl, "_blank");
}

// Your existing JavaScript code
document.getElementById('mobile-menu').addEventListener('click', function() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

var currentLocation = location.href;
var navItems = document.querySelectorAll('.nav-item a');

navItems.forEach(item => {
  if (item.href === currentLocation) {
    item.classList.add('active');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
      navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
  });
});

