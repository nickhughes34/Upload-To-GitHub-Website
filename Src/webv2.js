const light = document.getElementById("light");
const dark = document.getElementById("dark");
const home = document.getElementById("home");
const root = document.querySelector(':root');
const gif_back = document.getElementById("gif_back");

const about = document.getElementById("about");
const experience = document.getElementById("experience");
const projects = document.getElementById('projects');
const contact = document.getElementById("contact");

const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");
const boxFour = document.getElementById("boxFour");
const boxFive = document.getElementById("boxFive");

const imageClick = document.querySelectorAll(".imageClick");

light.addEventListener("click", function(){
    root.style.setProperty('--main-background-color', 'rgba(255,250,250, 1)');
    root.style.setProperty('--opposite', 'rgba(5, 5, 5, 1)');
    root.style.setProperty('--secondary-color', 'rgba(255,250,250, 1)');
    gif_back.src = "";
    light.style.setProperty('display', 'none');
    dark.style.setProperty('display', 'block');
});

dark.addEventListener("click", function(){
    root.style.setProperty('--main-background-color', 'rgba(5, 5, 5, 1)');
    root.style.setProperty('--opposite', 'rgba(255,250,250, 1)');
    root.style.setProperty('--secondary-color', 'rgba(0, 32, 91, 1)');
    gif_back.src = "https://media.tenor.com/eeEA_cEAEbQAAAAC/stars-star.gif";
    dark.style.setProperty('display', 'none');
    light.style.setProperty('display', 'block');
});

about.addEventListener("click", function(){
    boxOne.classList.add("moveUp");
    boxThree.classList.add("resetY");
    home.innerHTML = "Back";
    home.style.setProperty('display', 'block');
});

experience.addEventListener("click", function(){
    boxOne.classList.add("moveLeft");
    boxFour.classList.add("resetX");
    home.innerHTML = "Back";
    home.style.setProperty('display', 'block');
});

projects.addEventListener("click", function(){
    boxOne.classList.add("moveRight");
    boxFive.classList.add("resetX");
    home.innerHTML = "Back";
    home.style.setProperty('display', 'block');
});

contact.addEventListener("click", function(){
    boxOne.classList.add("moveDown");
    boxTwo.classList.add("resetY");
    home.innerHTML = "Back";
    home.style.setProperty('display', 'block');
});

home.addEventListener("click", function(){
    boxOne.classList.remove("moveUp", "moveLeft", "moveRight", "moveDown");
    boxTwo.classList.remove("resetY");
    boxThree.classList.remove("resetY");
    boxFour.classList.remove("resetX");
    boxFive.classList.remove("resetX");
    home.innerHTML = "Home";
    home.style.setProperty('display', 'none');
});

imageClick.forEach(image => {
    image.addEventListener("click", function(){
        console.log(image);
        home.click();
    });
 });

