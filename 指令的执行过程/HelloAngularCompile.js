var myModule = angular.module("MyModule", []);
myModule.directive('alotofhello', function() {
    return {
        restrict: 'A',
        compile: function(el,attrs,transclude) {  //transclude表示对变迁替换等等
            //编译，这里开始对标签元素自身进行一些变换
            console.log("指令编译...");
            var tpl = el.children().clone();
            console.log(tpl);
            for (var i = 0; i < attrs.alotofhello - 1; i++) {
                el.append(tpl.clone());
            }
            return function(scope,el,attrs,controller){ //必须返回一个函数，就是link函数，以便后续处理
            	console.log("指令链接...");
            }
        },
  //下面的link函数无效，因为上面已经返回了link函数。所以使用了compile的时候，就不要再写link函数了
        link:function(){
            console.log("我自己的link函数...");
        }
    }
    //一般项目时只需要写link函数就行了，compile很少用
});
