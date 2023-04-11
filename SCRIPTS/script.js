// const left = document.querySelectorAll(".style-container:nth-of-type(odd)")
// const right = document.querySelectorAll(".style-container:nth-of-type(even)")

// function callback(entries, observer) {
//     // var left = document.querySelector(".style-container:nth-of-type(odd)")
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("slide-left")
//         }
//         else {
//             entry.target.classList.remove("slide-left")
//         }
//       });
//   }
//   function callback1(entries, observer) {
//     // var right = document.querySelector(".style-container:nth-of-type(even)")
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("slide-right")
//         }
//         else {
//             entry.target.classList.remove("slide-right")
//         }
//       });
//   }

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add("slide-left")
//     }
//     else {
//         entry.target.classList.remove("slide-left")
//     }
//   });
// }

// const callback1 = (entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("slide-right")
//         }
//         else {
//             entry.target.classList.remove("slide-right")
//         }
//       });
// }

// window.addEventListener("scroll", callback)
// window.addEventListener("scroll", callback1)

// var options = {}

// var myObserver = new IntersectionObserver(callback, options)

// myObserver.observe(left)

// var myObserver1 = new IntersectionObserver(callback1, options)

// myObserver1.observe(right)

// function 2

// const hidden = document.querySelector(".style-container:nth-of-type(odd)", ".style-container:nth-of-typeof(even)");
const reveals = document.querySelectorAll(".style-container");  
// const reveals1 = document.querySelectorAll(".style-container:nth-of-type(even)");

// function hide() {
//   hidden.style.visibility = "hidden"; 
// }

// window.addEventListener("DOMContentLoaded", hide);

// function show() {
//   hidden.style.visibility = "visible"; 
// }

// window.addEventListener("scroll", show);

function reveal() {
    // var reveals = document.querySelectorAll(".style-container:nth-of-type(odd)");
  
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

  // function revealRight() {
  //   // var reveals1 = document.querySelectorAll(".style-container:nth-of-type(even)");
  
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveal[i].getBoundingClientRect().top;
  //     var elementVisible = 0;
  
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("slide-right");
  //     } 
  //     // else {
  //     //   reveals1[i].classList.remove("slide-right");
  //     // }
  //   }
  // }
  
  // window.addEventListener("scroll", revealRight);
