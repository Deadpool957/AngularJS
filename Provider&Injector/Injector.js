var myModule = angular.module("MyModule", []);

myModule.factory('game', function() {  //factory方法会生成一个服务
    return {
        gameName: '大漠吃豆子'
    }
});

myModule.controller('MyCtrl', ['$scope', '$injector',
    function($scope, $injector) {
        // console.log($scope);
        // $injector.invoke(function(game) {
        //     console.log(game.gameName);
        // });
        // console.log($injector);
        console.log($injector.annotate(function(arg0,arg1,arg2){}));
        // $injector的annotate方法是用来分析函数的参数的
    }
]);
