(function () {
'use strict';

angular.module('MyApp', [])
.controller('MyController', MyController);

function MyController ($scope,
                       $filter,
                       $injector) {
  $scope.message = "Please enter data first";
  $scope.something = "";
  $scope.Checkit = function () {
     console.log("clicked"+$scope);
     if($scope.something.trim()=="")
       $scope.message="Please enter data first";
     else
     {
       var ite=$scope.something.split(",");
       var som=0;
       for (var i in ite) {
          if(ite[i].trim()!=="")
            som++;
        }
        if(som>3)
          $scope.message="Too much!";
        else
          if(som>0)
            $scope.message="Enjoy!";
          else
            $scope.message="Please enter data first";
     }
  };

}


})();
