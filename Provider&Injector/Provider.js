var myModule = angular.module("MyModule", []);
myModule.provider("HelloAngular", function() {  //用provider方法生成一个服务
    return {
        $get: function() {   //必须有$get
            var name = "慕课网";
            function getName() {
                return name;
            }
            return {
                getName: getName
            }
        }
    }
});
myModule.controller('MyCtrl', ['$scope', 'HelloAngular',
    function($scope, helloAngular) {
        $scope.gameName = helloAngular.getName();
    }
])
