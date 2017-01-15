var myModule = angular.module("MyModule", []);
myModule.directive("superman", function() {
    return {
        scope: {},  //创建独立的作用域
        restrict: 'AE',
        controller: function($scope) {  
       /*
         这里的controller和MVC里的controller不一样，这里的controller是为了暴露出内部的方法，
         以便外部调用。指令和指令之间的交互就是靠这个controller来实现的。
       */
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        /*link是绑定事件，内部用的，处理内部逻辑*/
        link: function(scope, element, attrs) {
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    }
});
myModule.directive("strength", function() {
    return {
        require: '^superman',  // require表示依赖于
        link: function(scope, element, attrs, supermanCtrl) {  
       //有了依赖，就可以写第四个参数了，第四个参数其实就是上面的controller
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});