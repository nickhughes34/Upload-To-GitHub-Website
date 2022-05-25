var open =  document.getElementById('open');
var close =  document.getElementById('close');
var first =  document.getElementById('first');
var second =  document.getElementById('second');
var sideNav =  document.getElementById('sideNav');

open.addEventListener('click', function() {

  if (sideNav.classList.contains("block")){
      sideNav.classList.remove("block");
  }

  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("show");
  first.classList.toggle("hidden2");
  first.classList.toggle("show2");
  second.classList.toggle("hidden2");
  second.classList.toggle("show2");
});

close.addEventListener('click', function() {
  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("show");
  first.classList.toggle("hidden2");
  first.classList.toggle("show2");
  second.classList.toggle("hidden2");
  second.classList.toggle("show2");
});

var list = document.querySelectorAll('.circle');

list.forEach((item) => {
  new CircleType(item).radius(280);
});
