var app = angular.module('MainPage', []);

app.controller("angular", function($scope){
  var pythonPositions = ["first", "second", "third", "fourth"];
  var frontPositions = ["first", "second", "third", "fourth"];
  var backPositions = ["first", "second"];

  /*$scope.python = [
    {"Name": "Unkown Webpage 1", "Image": "Images/Screenshots/survey-screenshot.jpg", "Alt": "unknown page screenshot", "Go": "#", "Code": "#", "Position": "first"},
  {"Name": "Unkown Webpage 2", "Image": "Images/Screenshots/survey-screenshot.jpg", "Alt": "unknown page screenshot", "Go": "#", "Code": "#", "Position": "second"},
  {"Name": "Unknown Webpage 3", "Image": "Images/Screenshots/survey-screenshot.jpg", "Alt": "unknown page screenshot", "Go": "#", "Code": "#", "Position": "third"},
  {"Name": "Unkonwn Webpage 4", "Image": "Images/Screenshots/survey-screenshot.jpg", "Alt": "unknown page screenshot", "Go": "#", "Code": "#", "Position": "fouth"}];*/

  $scope.frontend = [
    {"Name": "Product Webpage", "Image": "Images/Screenshots/product-screenshot-2.jpg", "Alt": "product page screenshot", "Go": "/Product/product.html", "Code": "#", "Position": "first"},
    {"Name": "Survey Webpage", "Image": "Images/Screenshots/survey-screenshot-2.jpg", "Alt": "survey page screenshot", "Go": "/Survey/survey.html", "Code": "#", "Position": "second"},
    //{"Name": "Apple Webpage Clone", "Image": "Images/Screenshots/survey-screenshot.jpg", "Alt": "apple clone page screenshot", "Go": "/Apple_clone/apple_clone.html", "Code": "#", "Position": "third"},
    {"Name": "Google Clone", "Image": "Images/Screenshots/google-clone-screenshot.jpg", "Alt": "google clone screenshot", "Go": "/Google_Clone/google_clone.html", "Code": "#", "Position": "third"},
    {"Name": "Animations", "Image": "Images/Screenshots/animations-screenshot.jpg", "Alt": "animations page screenshot", "Go": "/Animation/animation.html", "Code": "#", "Position": "fourth"}];

  $scope.backend = [
    {"Name": "Weather Webpage", "Image": "Images/Screenshots/weather-screenshot-2.jpg", "Alt": "weather webpage screenshot", "Go": "/Weather/weather.html", "Code": "#", "Position": "first"},
  //{"Name": "Weather Webpage", "Image": "Images/Screenshots/weather-screenshot-2.jpg", "Alt": "weather webpage screenshot", "Go": "/Weather/weather.html", "Code": "#", "Position": "second"}
];

  $scope.description1 = "I am currently attending Ontario Tech University studying Networking and IT Security. Over the years of attending this school I have gained various skills. Some of them would include network design, python programming, front end and back end web design. I have developed some test webpages such as a Weather Checker, Product Webpage, and more listed below. I have also used various back end technologies such as API's, Amazon's RDS and MongoDB.";
  $scope.description2 = "I have developed a mobile game call Pixel Block Defense in Android Studio. I have great communication skills. I make abundant long-term and short-term goals to stay organized. I have plenty of experience with coding and network systems.";

  //Functions to scroll between project previews.
  $scope.back = function(type) {
    if (type == "python"){
      pythonPositions.push(pythonPositions[0]);
      pythonPositions.shift();

      for (let i = 0; i < pythonPositions.length; i ++){
          $scope.python[i]["Position"] = pythonPositions[i];
      }

    } else if (type == "front"){
      frontPositions.push(frontPositions[0]);
      frontPositions.shift();

      for (let i = 0; i < frontPositions.length; i ++){
          $scope.frontend[i]["Position"] = frontPositions[i];
      }

    }else{
      backPositions.push(backPositions[0]);
      backPositions.shift();

      for (let i = 0; i < backPositions.length; i ++){
          $scope.backend[i]["Position"] = backPositions[i];
      }
    }
  }

//Functions to scroll between project previews.
  $scope.next = function(type) {
    if (type == "python"){
      pythonPositions.unshift(pythonPositions[pythonPositions.length - 1]);
      pythonPositions.pop();

          for (let i = 0; i < pythonPositions.length; i ++){
              $scope.python[i]["Position"] = pythonPositions[i];
          }

    } else if (type == "front"){
      frontPositions.unshift(frontPositions[frontPositions.length - 1]);
      frontPositions.pop();

          for (let i = 0; i < frontPositions.length; i ++){
              $scope.frontend[i]["Position"] = frontPositions[i];
          }

    }else{
      backPositions.unshift(backPositions[backPositions.length - 1]);
      backPositions.pop();

          for (let i = 0; i < backPositions.length; i ++){
              $scope.backend[i]["Position"] = backPositions[i];
          }
    }
  }

})
