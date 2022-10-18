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
