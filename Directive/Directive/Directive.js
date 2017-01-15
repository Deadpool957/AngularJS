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
        template: '<div>Hi everyone!</div>',  //被替换成的模板
        /*
        如果模板内容非常多，则可以使用templateUrl，把内容放在一个html模板里，然后只要写路径就行了
        */
        replace: true
    }
});