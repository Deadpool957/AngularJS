var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{    //这是个独立作用域
        	flavor:'@' //独立作用域中表达式跟属性之间的交互传值用@，效果等同下面的link方法
        },
        template:"<div>{{flavor}}</div>"  //这里的{{flavor}}取值于上面独立作用域里的flavor
        // link:function(scope,element,attrs){
        // 	scope.flavor=attrs.flavor;   将属性flavor的值赋给独立作用域里的flavor。而属性值
        //  来自于控制器赋值（即$scope.ctrlFlavor="百威"）,这个属性就是drink的属性。
        // }
    }
});