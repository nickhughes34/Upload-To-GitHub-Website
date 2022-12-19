var open =  document.getElementById('open');
var side =  document.getElementById('sideNav');

open.addEventListener('click', function() {

  if (sideNav.classList.contains("block")){
    sideNav.classList.remove("block");
}

  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("show");
});
