/*指令系统*/

var myModule = angular.module("MyModule", []);

//当很多页面都需要用这个模板时，可以把它缓存起来
myModule.run(function($templateCache){
    $templateCache.put("hello.html","<div>我是被缓存的内容</div>");
});
//使用模块的directive方法创建一个指令，第一个参数是指令的名称，也就是标签名
myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get("hello.html"),  //被替换成的模板
        replace: true
    }
});