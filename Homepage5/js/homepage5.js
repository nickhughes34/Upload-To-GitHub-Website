var nav1 = document.getElementById("navCheck");
var logo = document.getElementById("logo");
var personal = document.getElementById("Personal");
var business = document.getElementById("Business");
var personalLink = document.getElementById("PersonalLink");
var businessLink = document.getElementById("BusinessLink");
var personalLinkImage = document.getElementById("PersonalLinkImage");
var businessLinkImage = document.getElementById("BusinessLinkImage");
var open =  document.getElementById('open');
var close =  document.getElementById('close');
var sideNav =  document.getElementById('sideNav');
var html =  document.getElementById('html');
var color = document.getElementById("Register");

var buttonRight = document.getElementById('slideRight');
var buttonLeft = document.getElementById('slideLeft');
var scrollContainer = document.getElementById('scrollContainer');
var buttonRight2 = document.getElementById('slideRight2');
var buttonLeft2 = document.getElementById('slideLeft2');
var scrollContainer2 = document.getElementById('scrollContainer2');
var buttonRight3 = document.getElementById('slideRight3');
var buttonLeft3 = document.getElementById('slideLeft3');
var scrollContainer3 = document.getElementById('scrollContainer3');

var openQuestion1 = document.getElementById('Q1').children;
var openQuestion2 = document.getElementById('Q2').children;
var openQuestion3 = document.getElementById('Q3').children;
var openQuestion4 = document.getElementById('Q4').children;
var openQuestion5 = document.getElementById('Q5').children;

openQuestion1[0].addEventListener('click', function(){
  var openQuestion6 = document.getElementById(openQuestion1[0].id).children;
  openQuestion6[1].classList.toggle('fa-plus');
  openQuestion6[1].classList.toggle('fa-minus');
  openQuestion6[2].classList.toggle("block");
});

openQuestion2[0].addEventListener('click', function(){
  var openQuestion6 = document.getElementById(openQuestion2[0].id).children;
  openQuestion6[1].classList.toggle('fa-plus');
  openQuestion6[1].classList.toggle('fa-minus');
  openQuestion6[2].classList.toggle("block");
});

openQuestion3[0].addEventListener('click', function(){
  var openQuestion6 = document.getElementById(openQuestion3[0].id).children;
  openQuestion6[1].classList.toggle('fa-plus');
  openQuestion6[1].classList.toggle('fa-minus');
  openQuestion6[2].classList.toggle("block");
});

openQuestion4[0].addEventListener('click', function(){
  var openQuestion6 = document.getElementById(openQuestion4[0].id).children;
  openQuestion6[1].classList.toggle('fa-plus');
  openQuestion6[1].classList.toggle('fa-minus');
  openQuestion6[2].classList.toggle("block");
});

openQuestion5[0].addEventListener('click', function(){
  var openQuestion6 = document.getElementById(openQuestion5[0].id).children;
  openQuestion6[1].classList.toggle('fa-plus');
  openQuestion6[1].classList.toggle('fa-minus');
  openQuestion6[2].classList.toggle("block");
});





open.addEventListener('click', Toggle);
close.addEventListener('click', Toggle);
document.addEventListener('click', function(){OffClick(event)});

buttonRight.addEventListener('click', function(){
  scrollAmount = 0;
  var timer = setInterval( function(){
      scrollContainer.scrollLeft += 10;
      scrollAmount += 10;
      if(scrollAmount >= 350){
          window.clearInterval(timer);
    }}, 2);
})

buttonLeft.addEventListener('click', function(){
  var scrollAmount = 0;
  var timer = setInterval( function(){
      scrollContainer.scrollLeft -= 10;
      scrollAmount += 10;
      if(scrollAmount >= 350){
          window.clearInterval(timer);
    }}, 2);
})

buttonRight2.addEventListener('click', function(){
  scrollAmount = 0;
  var timer = setInterval( function(){
      scrollContainer2.scrollLeft += 10;
      scrollAmount += 10;
      if(scrollAmount >= 350){
          window.clearInterval(timer);
    }}, 2);
})

buttonLeft2.addEventListener('click', function(){
  var scrollAmount = 0;
  var timer = setInterval( function(){
      scrollContainer2.scrollLeft -= 10;
      scrollAmount += 10;
      if(scrollAmount >= 350){
          window.clearInterval(timer);
    }}, 2);
})

buttonRight3.addEventListener('click', function(){
  scrollAmount = 0;
  var timer = setInterval( function(){
      scrollContainer3.scrollLeft += 10;
      scrollAmount += 10;
      if(scrollAmount >= 350){
          window.clearInterval(timer);
    }}, 2);
})

buttonLeft3.addEventListener('click', function(){
  var scrollAmount = 0;
  var timer = setInterval( function(){
      scrollContainer3.scrollLeft -= 10;
      scrollAmount += 10;
      if(scrollAmount >= 350){
          window.clearInterval(timer);
    }}, 2);
})

function Toggle() {
  if (sideNav.classList.contains("block")){
    sideNav.classList.remove("block");
}

  sideNav.classList.toggle("hidden");
  sideNav.classList.toggle("show2");
  html.classList.toggle("stopScroll");
  document.documentElement.style.setProperty('--padding-color', '0px');
}

function OffClick(event) {
  if (sideNav.classList.contains("show2") && event.target.nodeName !== "I"){
    if (sideNav !== event.target && !sideNav.contains(event.target) || event.target.nodeName == "A") {
      Toggle();
    }
  }
}

window.onscroll = function(){
  if (window.pageYOffset >= nav1.offsetTop + 1) {
    nav1.classList.add("grow");
    nav1.classList.remove("shrink");
    logo.classList.add("grow");
    logo.classList.remove("shrink");
    color.classList.add("grow2");
    color.classList.remove("shrink2");
  } else {
    nav1.classList.add("shrink");
    nav1.classList.remove("grow");
    logo.classList.add("shrink");
    logo.classList.remove("grow");
    color.classList.add("shrink2");
    color.classList.remove("grow2");
  }

  $('.waiting').each(function(index) {
    //When height of browser + vertical position of the scroll bar >= element's top value.
      if($(window).height() + $(window).scrollTop() >= $(this).offset().top + 0){
            if ($(this).hasClass("L")){
              $(this).addClass('fadeInLeft');
            }
            else if ($(this).hasClass("R")){
              $(this).addClass('fadeInRight');
            }
            else{
              $(this).addClass('fadeInO');
            }
      }
  });
};
