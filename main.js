window.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');
    var navbarLinks = document.querySelectorAll('.navbar a');
    
    function activateSection(section) {
      sections.forEach(function(sec) {
        sec.classList.remove('active');
      });
      section.classList.add('active');
    }
    
    window.addEventListener('scroll', function() {
      var currentPosition = window.scrollY;
      
      sections.forEach(function(sec) {
        var sectionTop = sec.offsetTop;
        var sectionHeight = sec.offsetHeight;
        var sectionId = sec.getAttribute('id');
        
        if (currentPosition >= sectionTop - sectionHeight / 3 && currentPosition < sectionTop + sectionHeight) {
          activateSection(sec);
          history.replaceState(null, null, '#' + sectionId);
        }
      });
    });
    
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionId = this.getAttribute('href');
        var targetSection = document.querySelector(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
});