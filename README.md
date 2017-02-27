## 关于Angularjs相关的知识点总结

建议按照以下顺序学习，由简至难

#### QuickStart-快速入门

* 基础入门，分别用4个demo阐述了AngularJS的基础概念，如MVC模式、模块化、指令、双向数据绑定

#### MVC

* 重点讲了MVC、控制器的复用、模型的复用、利用directive实现view的复用

* 通过一个例子阐述了$scope（作用域）和$rootScope（根作用域）的复用

#### Provider&Injector

* Angular的3种依赖注入（Injector）的方式。如内联式注入、标注式注入、$scope注入

* 使用factory、provider、service三种方式创建服务

#### Service&Provider

* 介绍常用的服务如filter、http，以及自定义filter和service

#### Both-Data-bind

* 双向数据绑定机制、CSS控制、表单、ng-class、ng-show的使用

#### Directive-指令

本章是重点，主要介绍了：

* 指令、自定义指令Accordion、指令和控制器的交互、指令和指令间的交互

* 独立scope、$scope的三种绑定机制即&绑定、@绑定、=绑定

* 模板缓存、replace的使用、使用transclude实现元素的嵌套

#### $scope与双向数据绑定

* 表单、link函数的使用

#### 指令的执行过程

* 重点介绍指令的实现过程、即complie编译和link链接、装载。

#### AngularJS的启动过程

* Angular对象

* Angular的三种启动方式

* 模块加载、导入Jquery

#### Form-validate

* 表单验证详解

####  说明

如果觉得好，欢迎star&folk，一起进步，共勉。