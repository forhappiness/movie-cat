/**
 * Created by Administrator on 2017/5/26.
 */
(function (angular) {
    'use strict';

    angular.module('moviecat.come', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/movie_come', {
                templateUrl: 'movie_come/view.html',
                controller: 'ComeController'
            });
        }])

        .controller('ComeController', [function() {

        }]);

})(angular)