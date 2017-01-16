//最简单的例子，内联式注入
var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope',function($scope) {  //function里的$scope可以换
        $scope.gameName = "大漠吃豆子"
    }
]);
