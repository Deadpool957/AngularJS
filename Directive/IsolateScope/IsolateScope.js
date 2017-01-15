var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        scope:{},  //独立scope，使得每个指令之间不会互相影响，有自己的作用域
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});