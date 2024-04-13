images = [
  "/images/artgallery/profile/image1.jpg",
  "/images/artgallery/profile/image2.jpg",
  "/images/artgallery/profile/image3.jpg",
  "/images/artgallery/profile/image5.jpg",
  "/images/artgallery/profile/image7.jpg",
  "/images/artgallery/profile/image8.jpg",
  "/images/artgallery/profile/image10.jpg",
  "/images/artgallery/profile/image11.jpg",
];

currentIndex = 0;
carouselImage = document.getElementById('carouselImage');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = images[currentIndex];
}

setInterval(changeImage, 2000);

window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var footer = document.getElementById('footer');
  if (window.scrollY > 0) {
    header.style.backgroundColor = 'black';
    header.style.opacity = 1;

    footer.style.backgroundColor = 'black';
    footer.style.opacity = 1;


  } else {
    header.style.backgroundColor = '#000000b3';

    footer.style.backgroundColor = '#000000b3';

  }

});

// Get current URL path
currentPath = window.location.pathname;

if (currentPath === '/register' || currentPath === '/login') {
  carouselImage.style.filter = 'blur(10px)';
}

// Get all navigation links
navLinks = document.querySelectorAll('.nav-links');
navLinks1 = document.querySelectorAll('.nav-links1');

for (let i = 0; i < navLinks.length; i++) {
  const link = navLinks[i];
  const link1 = navLinks1[i];

  if (link.getAttribute('href') === currentPath) {
    link.classList.add('text-pink-700');
    link1.classList.add('scale-150');
  }

  link.addEventListener('click', function (event) {

    navLinks.forEach(link => {
      link.classList.remove('text-pink-700');
    });
    navLinks1.forEach(link => {
      link.classList.remove('scale-150');
    });

    this.classList.add('text-pink-700');
    link1.classList.add('scale-150');
  });
}



slider = document.querySelector('[data-slider]')

track = slider.querySelector('[data-slider-track]')
prev = slider.querySelector('[data-slider-prev]')
next = slider.querySelector('[data-slider-next]')

if (track) {
  prev.addEventListener('click', () => {
    next.removeAttribute('disabled')

    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: 'smooth'
    })
  })

  next.addEventListener('click', () => {
    prev.removeAttribute('disabled')

    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: 'smooth'
    })
  })

  track.addEventListener('scroll', () => {
    const trackScrollWidth = track.scrollWidth
    const trackOuterWidth = track.clientWidth

    prev.removeAttribute('disabled')
    next.removeAttribute('disabled')

    if (track.scrollLeft <= 0) {
      prev.setAttribute('disabled', '')
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute('disabled', '')
    }
  })
}


