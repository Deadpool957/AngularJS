var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        template: '<div>Hi everyone!</div>',
        replace: true,
        //link函数内写事件或者对$scope取值赋值
        link: function(scope, el, attrs, controller) {
            //console.log("<hello>...link...");
            el.on("mouseenter", function() {
                console.log("鼠标进入...");
            });
        }
    }
});
