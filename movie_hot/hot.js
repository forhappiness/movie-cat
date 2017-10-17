(function (angular) {
    'use strict';

    var hotModule = angular.module('moviecat.hot', ['ngRoute']);

    hotModule
        .controller('HotController', ["$scope", "$http", "$route", "$routeParams", "hoturl",
            function ($scope, $http, $route, $routeParams, hoturl) {
                window.doubanMovieCallback = function (data) {
                    if (data.msg) {
                        //返回错误信息
                        $scope.message = data.msg;
                    } else {
                        $scope.movies = data;
                        $scope.message = '';
                    }
                }
                //网络请求地址
                var url = "https://api.douban.com/v2/movie/in_theaters?callback=doubanMovieCallback";
                $http.jsonp(url).error(function () {
                    
                });

            }]);

})(angular)
