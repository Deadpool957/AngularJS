function CommonController($scope){
	$scope.CommonFn=function(){
		alert('这里是公用的功能');
	}
}
function Controller1($scope){
	$scope.greeting={
		text:'Hello1'
	};
	$scope.test1=function(){
		alert('这里是test1方法');
	}
}
function Controller2($scope){
    $scope.greeting={
		text:'Hello2'
	};
	$scope.test2=function(){
		alert('这里是test2方法');
	}
}