/*FOR OPEN AND CLOSE OF SIDE NAVBAR*/
var open =  document.getElementById('open');
var close =  document.getElementById('close');
var first =  document.getElementById('first');
var second =  document.getElementById('second');
var sideNav =  document.getElementById('sideNav');
var html =  document.getElementById('html');
var checked =  document.getElementById('switchButton');

open.addEventListener('click', Open);
close.addEventListener('click', Close);
document.addEventListener('click', function(){OffClick(event)});
switchButton.addEventListener("change", Checked);
Rounded();
Checked();

function Close() {
  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("show");
  first.classList.toggle("hidden2");
  first.classList.toggle("show2");
  second.classList.toggle("hidden2");
  second.classList.toggle("show2");
  html.classList.toggle("stopScroll");
}

function Open() {
  if (sideNav.classList.contains("block")){
      sideNav.classList.remove("block");
  }

  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("show");
  first.classList.toggle("hidden2");
  first.classList.toggle("show2");
  second.classList.toggle("hidden2");
  second.classList.toggle("show2");
  html.classList.toggle("stopScroll");
}

function OffClick(event) {
  if (sideNav.classList.contains("show") && event.target.nodeName !== "I"){
    if (sideNav !== event.target && !sideNav.contains(event.target) || event.target.nodeName == "A") {
      Close();
    }
  }
}

function Checked() {
      var list = document.querySelectorAll(".borderStyle");
      var list2 = document.querySelectorAll(".sectiontitle");

      list.forEach((item) => {
        item.classList.toggle("borderShadow");
      });

      list2.forEach((item) => {
        item.classList.toggle("sectionShadow");
      });
}

/*FOR CURVED FONT*/
function Rounded(){
  var list = document.querySelectorAll('.circle');

  list.forEach((item) => {
    new CircleType(item).radius(280);
  });
}
