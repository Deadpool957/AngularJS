var myModule = angular.module("MyModule", []);
myModule.factory("HelloAngular", function() {
    var name = "慕课网";
    function getName(){
        return name;
    }
    return {
    	getName:getName
    };
});
myModule.controller('MyCtrl', ['$scope', 'HelloAngular',
    function($scope, helloAngular) {
        $scope.gameName = helloAngular.getName();  //将服务里的函数注入到$scope里
    }
]);
