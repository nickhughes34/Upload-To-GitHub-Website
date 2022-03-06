var app = angular.module('ProductPage', []);
var textfile = [
  { "_id"  : "first",
  "item" : "Max Air Shoes",
  "size" : {
              "S" : 25,
              "M" : 25,
              "L" : 50
           },
  "price" : 59.99
},
{ "_id"  :  "second",
  "item" : "Max Air Pants",
  "size" : {
              "S" : 5,
              "M" : 5,
              "L" : 10
           },
  "price" : 39.99
},
{ "_id" : "third",
  "item" : "Max Air Shirt",
  "size" : {
              "S" : 15,
              "M" : 15,
              "L" : 20
           },
  "price" : 29.99
},
{ "_id"  : "fourth",
  "item" : "Min Air Shoes",
  "size" : {
              "S" : 25,
              "M" : 25,
              "L" : 50
           },
  "price" : 159.99
},
{ "_id"  :  "fifth",
  "item" : "Min Air Pants",
  "size" : {
              "S" : 5,
              "M" : 5,
              "L" : 10
           },
  "price" : 139.99
},
{ "_id" : "sixth",
  "item" : "Min Air Shirt",
  "size" : {
              "S" : 15,
              "M" : 15,
              "L" : 20
           },
  "price" : 129.99
},
{ "_id"  : "first",
"item" : "Max Air Shoes v2",
"size" : {
            "S" : 25,
            "M" : 25,
            "L" : 50
         },
"price" : 1159.99
},
{ "_id"  :  "second",
"item" : "Max Air Pants v2",
"size" : {
            "S" : 5,
            "M" : 5,
            "L" : 10
         },
"price" : 1139.99
},
{ "_id" : "third",
"item" : "Max Air Shirt v2",
"size" : {
            "S" : 15,
            "M" : 15,
            "L" : 20
         },
"price" : 1129.99
},
{ "_id"  : "fourth",
"item" : "Min Air Shoes v2",
"size" : {
            "S" : 25,
            "M" : 25,
            "L" : 50
         },
"price" : 1159.99
},
{ "_id"  :  "fifth",
"item" : "Min Air Pants v2",
"size" : {
            "S" : 5,
            "M" : 5,
            "L" : 10
         },
"price" : 1139.99
},
{ "_id" : "sixth",
"item" : "Min Air Shirt v2",
"size" : {
            "S" : 15,
            "M" : 15,
            "L" : 20
         },
"price" : 1129.99
}]

app.controller("angular", function($scope){
  $scope.amount = 0;
  $scope.number = 1;
  $scope.inCart = [];
  $scope.prices = [0,0,0];

  $scope.listUpdate = function(){ //adds page items to list for display.
        $scope.list = [textfile[6*$scope.number-6], textfile[6*$scope.number-5], textfile[6*$scope.number-4],textfile[6*$scope.number-3], textfile[6*$scope.number-2], textfile[6*$scope.number-1]];
  }

  $scope.next = function() {//moves to next 6 items. Only moves to page 2 max.
    if ($scope.number == 2){
      null;
    }
    else{
      $scope.number = $scope.number + 1;
    }

    $scope.listUpdate();
  }

  $scope.back = function() { //moves back to last 6 items. Only moves to page 1 max.
    if ($scope.number == 1){
      null;
    }
    else{
      $scope.number = $scope.number - 1;
    }

    $scope.listUpdate();
  }

  $scope.add = function(name, price) { // adds item and price to cart.
    $scope.amount = $scope.amount + 1;

    if ($scope.inCart.length != 0){ //if cart not empy loop and check.
      var counter = 0;

        for (let i = 0; i < $scope.inCart.length; i++){
            if ($scope.inCart[i][0] == name){ //if in cart add to amount. Updates price.
                $scope.inCart[i][2] = $scope.inCart[i][2] + 1;
                $scope.inCart[i][1] = $scope.inCart[i][1] + price;

            }else{ //if not in cart add to coutner.
              counter = counter + 1;
            }
        }

        if (counter == $scope.inCart.length){
          $scope.inCart.push([name, price, 1]);
        }

      } else { //if cart empy just add to cart.
        $scope.inCart.push([name, price, 1]);
      }

      $scope.cal();
  }

    $scope.cal = function() {
      $scope.prices[0] = 0; // reset subtotal

      for (let i = 0; i < $scope.inCart.length; i++){
        $scope.prices[0] = $scope.prices[0] + $scope.inCart[i][1];
      }
      $scope.prices[1] = $scope.prices[0] * 0.13; // 13% sales tax.
      $scope.prices[2] = $scope.prices[0] + $scope.prices[1]; // Total of Tax and Subtotal.
    }

})
