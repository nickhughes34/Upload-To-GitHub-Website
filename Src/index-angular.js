var app = angular.module('MainPage', []);

app.controller("MainController", function($scope){
  var html = "text-orange fa-brands fa-html5 fa-3x";
  var css = "text-primary fa-brands fa-css3-alt fa-3x";
  var javascript = "text-warning fa-brands fa-js-square fa-3x";
  var angular = "text-danger fa-brands fa-angular fa-3x";
  var bootstrap = "text-secondary fa-brands fa-bootstrap fa-3x";
  var mdb = "text-primary fa-brands fa-mdb fa-3x";
  var react = "text-info fa-brands fa-react fa-3x";
  var nodeJs = "text-success fa-brands fa-node-js fa-3x";
  var python = "text-warning fa-brands fa-python fa-3x";
  var jQuery = "jQuery";

  $scope.projects = [
    {id:"pro1",status:"active",title:"Real Estate Page", name:"Real Esate Webpage",image:"Src/Real-Estate-screenshot.png",alt:"real estate screenshot",description:"This project lets the user view a real estate homepage for Real Estate Today. Used Bootstrap for easy placement of elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Real_Estate",link:"https://nickhughes34.github.io/Real_Estate/Real_Estate.html",tech:{html, css, javascript, bootstrap, mdb}},
   {id:"pro2",status:"",title:"Coffee Menu", name:"Coffee Menu Webpage",image:"Src/Coffee-screenshot.png",alt:"coffee menu screenshot",description:"This project lets the user view a menu for Coffee Cafe Today. Used jQuery to setup a delayed animation for when user scrolls into view. Used Bootstrap and Angular for easy placement of elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Coffee",link:"https://nickhughes34.github.io/Coffee/coffee.html",tech:{html, css, javascript, angular, bootstrap, mdb}},
   {id:"pro3",status:"",title:"Weather App", name:"Weather Checker Webpage",image:"Src/Weather-screenshot.png",alt:"weather app screenshot",description:"This project lets the user input a city name to get the weather results. This project used plain Javascript to control the DOM to add all the weather elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Weather",link:"https://nickhughes34.github.io/Weather/weather.html",tech:{html, css, javascript}},
  {id:"pro4",status:"",title:"Survey Page", name:"Survey Form Page",image:"Src/Survey-screenshot.png",alt:"survey form screenshot",description:"This project takes user input and checks for validation in the users inputs, with custom validation messages. Used plain Javascript to accomplish the custom validation messages.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Survey",link:"https://nickhughes34.github.io/Survey/survey.html",tech:{html, css, javascript}}];

  $scope.description1 = "I am currently attending Ontario Tech University studying Networking and IT Security. Over the years of attending this school I have gained various skills. Some of them would include network design, python programming, front end and back end web design. I have developed some test webpages such as a Weather Checker, Product Webpage, and more listed below. I have also used various back end technologies such as API's, Amazon's RDS and MongoDB.";

$scope.proficient = ["HTML", "Javascript", "Python","CSS","jQuery","Node.js","Angular","C"];

$scope.hobbies = ["Reading", "Coding", "Walking","Moblie Game Design","Building Computers","Solving Puzzels","Network Design","Website Design"];

  $scope.description2 = "I have developed a mobile game call Pixel Block Defense in Android Studio. I make abundant long-term and short-term goals to stay organized. I have plenty of experience with coding and network systems.";

})
