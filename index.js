// $(window).scroll(function(){
//     if($(this).scrollTop() > 100){
//         $('.nav').addClass('sticky')
//     } else{
//         $('.nav').removeClass('sticky')
//     }
//   });

const navbar = document.querySelector('.nav');

function stickyNavbar() {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNavbar);
