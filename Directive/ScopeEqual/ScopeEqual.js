var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{  //独立作用域
        	flavor:'=' //用=号就表示，取值于drink标签里的属性flavor的值
        },
        template:'<input type="text" ng-model="flavor"/>'  //这里的flavor取值于独立作用域里的flavor
    }
});