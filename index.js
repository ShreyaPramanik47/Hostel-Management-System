// $(window).scroll(function(){
//     if($(this).scrollTop() > 100){
//         $('.nav').addClass('sticky')
//     } else{
//         $('.nav').removeClass('sticky')
//     }
//   });

// Select the navbar element
// Select the navbar element
const navbar = document.querySelector('.nav');

// Function to add the 'sticky' class to the navbar when scrolling
function stickyNavbar() {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Add scroll event listener
window.addEventListener('scroll', stickyNavbar);
