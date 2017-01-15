/*指令系统*/

var myModule = angular.module("MyModule", []);

//使用模块的directive方法创建一个指令，第一个参数是指令的名称，也就是标签名
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        /*
        restrict是匹配模式，一个有四个选项，AEMC，A表示属性(Attribute)，E表示元素(element)，
        M表示注释,C表示类class
        */
        template: '<div>Hi everyone!<div ng-transclude></div></div>', 
        transclude: true   
        /*使用transclude，以及模板里写ng-transclude，那么元素内部的内容会被放在模板里，不会被替换*/
    }
});