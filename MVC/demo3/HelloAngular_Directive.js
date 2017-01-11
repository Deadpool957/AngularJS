/*指令系统*/

var myModule = angular.module("MyModule", []);

//使用模块的directive方法创建一个指令，第一个参数是指令的名称，也就是标签名
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        template: '<div>Hi everyone!</div>',  //被替换成的模板
        replace: true
    }
});