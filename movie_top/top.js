/**
 * Created by Administrator on 2017/5/26.
 */
(function (angular) {
    'use strict';

    angular.module('moviecat.top', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/movie_top', {
                templateUrl: 'movie_top/view.html',
                controller: 'TopController'
            });
        }])

        .controller('TopController', [function() {

        }]);

})(angular)