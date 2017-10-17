'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('moviecat', [
    'ngRoute',
    'moviecat.hot',
    'moviecat.come',
    'moviecat.top'
]);
/**
 * 设置当前网络请求的地址
 */
app.constant("hoturl", function () {
    movies_api: 'https://api.douban.com/v2/movie/in_theaters'
});
app.constant("comeurl", function () {
    movies_api: 'https://api.douban.com/v2/movie/in_theaters'
})

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/movie_hot", {
        controller: 'HotController',
        templateUrl: 'movie_hot/view.html'
    }).when("/movie_come", {
        controller: 'ComeController',
        templateUrl: 'movie_come/view.html'
    }).when("/movie_top", {
        controller: 'TopController',
        templateUrl: 'movie_top/view.html'
    })
        .otherwise({redirectTo: '/movie_hot'});
}]);
