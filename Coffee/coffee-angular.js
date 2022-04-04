var app = angular.module('CoffeePage', []);

app.controller("MainController", function($scope){
  $scope.image1 = "./Images/coffee1.jpg";
  $scope.image2 = "./Images/coffee2.jpg";
  $scope.menu = {h2:"We have excellent quaility coffee",p:"We provide high quality whole roasted coffee beans that have been blended and roasted to ensure each freshly-brewed cup of coffee is deliciously satisfying."};
  $scope.quotes = [{quote:"Best premium cup of coffee you will every try.",author:"Nicholas Hughes"},
                            {quote:"Tastes just like sleeping on a bed of clouds.",author:"Mark Matt"},
                            {quote:"Just like my grandma used to make.",author:"Matt Mattman"}];
  $scope.items = [{name:"Coffee - Black", sprice: "2.29", scalories: "3", mprice: "3.29", mcalories: "4", lprice: "4.29", lcalories: "5", image:"./Images/coffee3.jpg"},
                            {name:"Coffee - Regular", sprice: "2.89", scalories: "103", mprice: "3.89", mcalories: "104", lprice: "4.89", lcalories: "105", image:"./Images/coffee3.jpg"},
                            {name:"Coffee - Double Double", sprice: "3.59", scalories: "203", mprice: "4.29", mcalories: "204", lprice: "5.29", lcalories: "205", image:"./Images/coffee3.jpg"},
                            {name:"Coffee - Triple Triple", sprice: "3.89", scalories: "303", mprice: "4.89", mcalories: "304", lprice: "5.89", lcalories: "305", image:"./Images/coffee3.jpg"},
                            {name:"Dark Roast Coffee - Black", sprice: "2.29", scalories: "3", mprice: "3.29", mcalories: "4", lprice: "4.29", lcalories: "5", image:"./Images/darkRoast.jpg"},
                            {name:"Dark Roast Coffee - Regular", sprice: "2.89", scalories: "103", mprice: "3.89", mcalories: "104", lprice: "4.89", lcalories: "105", image:"./Images/darkRoast.jpg"},
                            {name:"Dark Roast Coffee - Double Double", sprice: "3.59", scalories: "203", mprice: "4.29", mcalories: "204", lprice: "5.29", lcalories: "205", image:"./Images/darkRoast.jpg"},
                            {name:"Dark Roast Coffee - Triple Triple", sprice: "3.89", scalories: "303", mprice: "4.89", mcalories: "304", lprice: "5.89", lcalories: "305", image:"./Images/darkRoast.jpg"},
                            {name:"Tea - Regular", sprice: "2.89", scalories: "0", mprice: "3.49", mcalories: "0", lprice: "4.09", lcalories: "0", image:"./Images/tea.jpg"},
                            {name:"Tea - Double Double", sprice: "3.29", scalories: "200", mprice: "3.89", mcalories: "200", lprice: "4.49", lcalories: "200", image:"./Images/tea.jpg"},
                            {name:"Tea - Triple Triple", sprice: "3.69", scalories: "300", mprice: "4.29", mcalories: "300", lprice: "5.89", lcalories: "300", image:"./Images/tea.jpg"},
                            {name:"Iced Coffee - Black", sprice: "2.29", scalories: "3", mprice: "3.29", mcalories: "4", lprice: "4.29", lcalories: "5", image:"./Images/icedCoffee.jpg"},
                            {name:"Iced Coffee - Regular", sprice: "2.89", scalories: "113", mprice: "3.89", mcalories: "148", lprice: "4.89", lcalories: "223", image:"./Images/icedCoffee.jpg"},
                           {name:"Iced Latte", sprice: "2.59", scalories: "112", mprice: "3.29", mcalories: "138", lprice: "4.29", lcalories: "188", image:"./Images/icedLattle.jpg"},
                           {name:"Latte", sprice: "2.59", scalories: "112", mprice: "3.29", mcalories: "138", lprice: "4.29", lcalories: "188", image:"./Images/latte.jpg"},
                           {name:"Milk", sprice: "2.59", scalories: "125", mprice: "2.99", mcalories: "135", lprice: "3.89", lcalories: "151", image:"./Images/milk.jpg"}];
})
