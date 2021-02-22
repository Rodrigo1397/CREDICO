'use strict';

window.addEventListener('scroll', function () {
  var header = document.querySelector('nav');
  var link = document.querySelectorAll('#link');
  header.classList.toggle('sticky', window.scrollY > 0);
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('sticky', window.scrollY > 0);
  }
});
