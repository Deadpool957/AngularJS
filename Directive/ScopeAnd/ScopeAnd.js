var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.sayHello=function(name){  //父级作用域的函数
		alert("Hello "+name);
	}
}])
myModule.directive("greeting", function() {
    return {
    	restrict:'AE',
        scope:{  //独立作用域
        	greet:'&'//这里使用&符号，使greet取值于greeting标签的greet属性值，即$scope里的函数
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
        		 '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br/>'
    }  //这里的greet就是独立作用域里的greet，里面的userName就是ng-model里的userName
});