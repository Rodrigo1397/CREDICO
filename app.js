'use strict';

window.addEventListener('scroll', function () {
  var header = document.querySelector('nav');
  var link = document.querySelectorAll('#link');
  var menunegro = document.querySelectorAll('#menunegro');
  var menublanco = document.querySelectorAll('#menublanco');
  header.classList.toggle('sticky', window.scrollY > 0);
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('sticky', window.scrollY > 0);
    if (window.scrollY > 0) {
      menunegro[0].classList.add('d-none');
      menublanco[0].classList.remove('d-none');
    } else {
      menunegro[0].classList.remove('d-none');
      menublanco[0].classList.add('d-none');
    }
  }
});
