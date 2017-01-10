/*由于全局的函数会污染空间,因此需要模块化*/

//用module方法定义一个名为HelloAngular的模块
var myModule=angular.module("HelloAngular",[]);  

//用模块的controller方法生成一个名称为mvc的控制器，
myModule.controller("mvc",['$scope',   //$scope意思是让angular注入下面的函数
	function Angular($scope) {  //函数名称可以任意，参数一定要是$scope
		$scope.a={
			text:'helloWorld'
		};
	}
]);
