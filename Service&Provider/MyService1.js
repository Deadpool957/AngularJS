var myServiceApp = angular.module("MyServiceApp", []);
myServiceApp.factory('userListService', ['$http',
    //自定义的service不要以$符打头
    function($http) {
        var doRequest = function(username, path) {
            return $http({
                method: 'GET',
                url: 'users.json'
            });
        }
        return {
            userList: function(username) {
                return doRequest(username, 'userList');
            }
        };
    }
]);

myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService',
    //自己定义的service放在最后,依赖注入
    function($scope, $timeout, userListService) {
        var timeout;
        $scope.$watch('username', function(newUserName) { //使用$watch来监控模型的变化
            if (newUserName) {   //如果有新的newUserName，即用户输入了数据
                if (timeout) {
                    $timeout.cancel(timeout);
                }
                timeout = $timeout(function() {  // $timeout其实就是对setTimeout进行了封装
                    userListService.userList(newUserName)
                        .success(function(data, status) {
                            $scope.users = data;
                        });
                }, 350);
            }
        });
    }
]);

//...