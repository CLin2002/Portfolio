const reveals = document.querySelectorAll(".style-container");  

function reveal() {
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
  
      if (elementTop < windowHeight - elementVisible && i % 2 === 0) {
        reveals[i].classList.add("slide-left");
      } 
      if (elementTop < windowHeight - elementVisible && i % 2 !== 0){
        reveals[i].classList.add("slide-right");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

