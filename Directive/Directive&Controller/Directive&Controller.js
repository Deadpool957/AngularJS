var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.loadData=function(){
		console.log("加载数据中...");
    }
}]);
myModule.controller('MyCtrl2', ['$scope', function($scope){
    $scope.loadData2=function(){
        console.log("加载数据中...22222");
    }
}]);
myModule.directive("loader", function() {
    return {
    	restrict:"AE",
    	link:function(scope,element,attrs){  //参数一定要写
            //为这个元素绑定鼠标移入事件
    		element.bind('mouseenter', function(event) {
                
                /*一个页面只有一个loader时，可以使用下面的方法调用*/
    			//scope.loadData();   调用scope的loadData方法
    			// scope.$apply("loadData()"); 使用$apply方法去调用


                /*
                  但是如果一个页面有很多个控制器都有loader时，则要通过属性去调用自己的方法。
                  attrs.howtoload会调用自己的方法。这样就实现了指令的复用
                */
    			// 注意这里的坑，howToLoad会被转换成小写的howtoload
    			scope.$apply(attrs.howtoload);
    		});
        }
    } 
});