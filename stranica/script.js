// JavaScript code
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
  