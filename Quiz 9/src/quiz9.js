var courseProject = document.getElementById("courseProject");
var mid1 = document.getElementById("mid1");
var mid2 = document.getElementById("mid2");
var quiz1 = document.getElementById("quiz1");
var quiz2 = document.getElementById("quiz2");
var quiz3 = document.getElementById("quiz3");
var quiz4 = document.getElementById("quiz4");
var quiz5 = document.getElementById("quiz5");
var quiz6 = document.getElementById("quiz6");
var quiz7 = document.getElementById("quiz7");
var quiz8 = document.getElementById("quiz8");
var quiz9 = document.getElementById("quiz9");

var finalGrade = document.getElementById("finalGrade");

function calculation(){
    var mid1G = 0;
    var mid2G = 0;

    if(mid1.value != ""){
        mid1G = parseInt(mid1.value);
    } 
    
    if(mid2.value != ""){
        mid2G = parseInt(mid2.value);
    } 

    var midterm = (mid1G + mid2G) * 0.25;
    var course = parseInt(courseProject.value);

    var quiz = [
        parseInt(quiz1.value), 
        parseInt(quiz2.value), 
        parseInt(quiz3.value), 
        parseInt(quiz4.value), 
        parseInt(quiz5.value), 
        parseInt(quiz6.value), 
        parseInt(quiz7.value),
        parseInt(quiz8.value),
        parseInt(quiz9.value)
    ];

    console.log(quiz);

    var min1 = quiz.indexOf(Math.min(...quiz))
    quiz.splice(min1, 1); 

    console.log(min1);

    var min2 = quiz.indexOf(Math.min(...quiz))
    quiz.splice(min2, 1); 

    console.log(quiz);

    var sumOfQuiz = 0;
    for (const value of quiz) {
        sumOfQuiz += value;
    }

    var finalSum = sumOfQuiz * 50 / 70;

    var final = (course + midterm + finalSum);
    finalGrade.value = final;
}

courseProject.addEventListener("change", calculation);
mid1.addEventListener("change", calculation);
mid2.addEventListener("change", calculation);
quiz1.addEventListener("change", calculation);
quiz2.addEventListener("change", calculation);
quiz3.addEventListener("change", calculation);
quiz4.addEventListener("change", calculation);
quiz5.addEventListener("change", calculation);
quiz6.addEventListener("change", calculation);
quiz7.addEventListener("change", calculation);
quiz8.addEventListener("change", calculation);
quiz9.addEventListener("change", calculation);

