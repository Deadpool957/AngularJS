/**
 * Created by 钟林生 on 2017/1/17.
 */
var myApp=angular.module('myApp',[]);
myApp.controller('mainController',function ($scope) {
    $scope.userData={
        username:''
    };
    $scope.submitForm=function () {
        //console.log($scope.userData);
        console.log($scope);
        if($scope.signUpForm.$invalid){ //这里能在$scope里调用signUpForm是因为前台里用了ng-submit
            alert('提交失败');
        }else{
            alert('提交成功');
        }
    }
});
myApp.directive('compare',function () {
    return{
        restrict:'AE',
        scope:{
            orgText:"=compare"
        },
        require:'ngModel',
        link:function (scope,element,attr,controller) {
            controller.$validators.compare=function (v) {
                return v==scope.orgText;
            }
            //监听密码有没有改变，有改变了就继续验证
            scope.$watch('orgText',function () {
                controller.$validate();
            })
        }
    }
});