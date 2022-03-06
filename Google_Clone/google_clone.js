var app = angular.module('GoogleClone', []);

app.controller("MainController", function($scope){
  $scope.about = "https://about.google/";
  $scope.store = "https://store.google.com/?hl=en-CA";
  $scope.gmail = "https://www.google.com/gmail/about";
  $scope.images = "https://www.google.ca/imghp?hl=en";
  $scope.lucky = "https://www.google.com/doodles";
  $scope.ads = "https://ads.google.com/intl/en_ca/home/";
  $scope.business = "https://smallbusiness.withgoogle.com/intl/en_ca/#!/";
  $scope.howitworks = "https://www.google.com/search/howsearchworks/?fg=1";
  $scope.privacy = "https://policies.google.com/privacy?hl=en-CA&fg=1";
  $scope.terms = "https://policies.google.com/terms?hl=en-CA&fg=1";
  $scope.french = "#";
  $scope.google = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  $scope.tabIamge = "https://www.gstatic.com/images/branding/googleg/2x/googleg_standard_color_120dp.png";
});
