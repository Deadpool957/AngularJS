var myModule = angular.module("MyModule", []);

var MyCtrl = function(thisIsMyName) {  //函数参数的名称会变化时，可以随意设置参数名称，但是必须保证顺序的一致性
    thisIsMyName.gameName = "大漠吃豆子";
}
/*标注式注入*/
MyCtrl.$inject = ['$scope'];
  
myModule.controller('MyCtrl', MyCtrl);