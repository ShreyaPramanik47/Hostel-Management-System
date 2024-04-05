
// heading
var typeData = new Typed(".stylee", {
strings: [
  " Find Your Perfect Stay!",
  "Start Your Journey Here!"
],
loop: true,
typeSpeed: 50,
backSpeed: 80,
backDelay: 1500,
});

//   ANIMATED SLIDESHOW
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 5000); 
}



// navbar
const navbar = document.querySelector('.nav');
function stickyNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
window.addEventListener('scroll', stickyNavbar);

// sticky button 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.sticky-btn').classList.remove('hidden');
    } else {
        document.querySelector('.sticky-btn').classList.add('hidden');
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// pages opening


