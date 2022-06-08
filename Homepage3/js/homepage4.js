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

/*
var op1 =  document.getElementById('op1');
var op2 =  document.getElementById('op2');
var op3 =  document.getElementById('op3');
var op4 =  document.getElementById('op4');

op1.addEventListener('click', function(){
  document.documentElement.style.setProperty('--header-bg-color', 'rgba(0,0,0,0.7)');
  document.documentElement.style.setProperty('--hr-color', 'rgba(0, 0, 0,1)');
  document.documentElement.style.setProperty('--main-bg-color', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-white', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-black', 'rgba(0,0,0,1)');
  document.documentElement.style.setProperty('--bg-table-2', 'rgba(255, 201, 0,1)');
  document.documentElement.style.setProperty('--bg-yellow', 'rgba(255, 201, 0,1)');
  document.documentElement.style.setProperty('--bg-button-text', 'rgba(255, 201, 0,1)');
  document.documentElement.style.setProperty('--bg-button-highlight', 'rgba(255, 201, 0,1)');
});

op2.addEventListener('click', function(){252, 246, 245
  document.documentElement.style.setProperty('--header-bg-color', 'rgba(255,100,1,1)');
  document.documentElement.style.setProperty('--hr-color', 'rgba(0, 0, 0,1)');
  document.documentElement.style.setProperty('--main-bg-color', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-white', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-black', 'rgba(0,0,0,1)');
  document.documentElement.style.setProperty('--bg-table-2', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-yellow', 'rgba(255, 201, 0,1)');
  document.documentElement.style.setProperty('--bg-button-text', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-button-highlight', 'rgba(0, 95, 184, 1)');
});

op3.addEventListener('click', function(){
  document.documentElement.style.setProperty('--header-bg-color', 'rgba(105,93,76,1)');
  document.documentElement.style.setProperty('--hr-color', 'rgba(0, 0, 0,1)');
  document.documentElement.style.setProperty('--main-bg-color', 'rgba(211, 187, 153,1)');
  document.documentElement.style.setProperty('--bg-white', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-black', 'rgba(0,0,0,1)');
  document.documentElement.style.setProperty('--bg-table-2', 'rgba(255, 201, 0, 1)');
  document.documentElement.style.setProperty('--bg-yellow', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-button-text', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-button-highlight', 'rgba(0, 95, 184, 1)');
});

op4.addEventListener('click', function(){
  document.documentElement.style.setProperty('--header-bg-color', 'rgba(110,110,110,1)');
  document.documentElement.style.setProperty('--hr-color', 'rgba(0,0,0,1)');
  document.documentElement.style.setProperty('--main-bg-color', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-white', 'rgba(255,255,255,1)');
  document.documentElement.style.setProperty('--bg-black', 'rgba(0,0,0,1)');
  document.documentElement.style.setProperty('--bg-table-2', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-yellow', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-button-text', 'rgba(0, 95, 184, 1)');
  document.documentElement.style.setProperty('--bg-button-highlight', 'rgba(0, 95, 184, 1)');
});
*/

open.addEventListener('click', Toggle);
close.addEventListener('click', Toggle);
document.addEventListener('click', function(){OffClick(event)});

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
};

personal.addEventListener("click", function(){
    personal.classList.add("underline");
    personalLink.classList.remove("block");
    personalLink.classList.add("highlight");
    business.classList.remove("underline");
    businessLink.classList.add("block");
    businessLink.classList.add("highlight");
    personalLinkImage.classList.add("highlight");
    personalLinkImage.classList.remove("block");
    businessLinkImage.classList.remove("highlight");
    businessLinkImage.classList.add("block");
});

business.addEventListener("click", function(){
    personal.classList.remove("underline");
    personalLink.classList.add("block");
    personalLink.classList.remove("highlight");
    business.classList.add("underline");
    businessLink.classList.remove("block");
    businessLink.classList.add("highlight");
    personalLinkImage.classList.remove("highlight");
    personalLinkImage.classList.add("block");
    businessLinkImage.classList.add("highlight");
    businessLinkImage.classList.remove("block");
});
