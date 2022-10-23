// NAVIGATION AREA

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  const containerNav = document.querySelector('.containerNav');
  if (wScroll > 100) {
    containerNav.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
  } else if (wScroll < 100) {
    containerNav.style.boxShadow = 'none';
  }
});

// HEADER AREA

const btnHeader = document.querySelector('header a');

btnHeader.addEventListener('click', function () {
  btnHeader.style.backgroundColor = 'inherit';
  btnHeader.style.border = '2px solid #0000ff';
  btnHeader.style.color = '#0000ff';
  setTimeout(function () {
    btnHeader.style.backgroundColor = '#0000ff';
    btnHeader.style.border = 'inherit';
    btnHeader.style.color = '#fff';
  }, 5000);
});

// PRECEPTOR AREA

const preceptor = document.querySelectorAll('.preceptor .preceptorImg');

for (let i = 0; i < preceptor.length; i++) {
  preceptor[i].addEventListener('click', function () {
    for (let a = 0; a < preceptor.length; a++) {
      preceptor[a].classList.toggle('animationButton');
    }
  });
}

// STUDENT AREA
// buat alt untuk masing2 gambar siswa
