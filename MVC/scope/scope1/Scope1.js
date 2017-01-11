function GreetCtrl($scope, $rootScope) {
	$scope.name = 'World';
	$rootScope.department = 'Angular'; //定义根作用域里的属性
}

function ListCtrl($scope) {
	$scope.names = ['Igor', 'Misko', 'Vojta'];
}
