'use strict';
angular.module('LearnAngular')
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

                $stateProvider
                        .state('landing', {
                            url: ('/'),
                            templateUrl: 'app/Landing/landing.html'
                        })
                        .state('404', {
                            url: '/404',
                            templateUrl: '404.html'
                        })
                        .state('home', {
                            url: '/home',
                            templateUrl: 'app/Modules/Home/home.html'
                        })
                        .state('home.list', {
                            url: '/list',
                            templateUrl: 'app/Modules/Home/list.html'
                        })
                        .state('home.paragraph', {
                            url:'/paragraph',
                            templateUrl: 'app/Modules/Home/paragraph.html'
                        })
                        .state('about', {
                            url: '/about',
                            templateUrl: 'app/Modules/Contact/contact.html'
                        })
                        .state('contact', {
                            url: '/contact',
                            templateUrl: 'app/Modules/about/about.html'
                        });
                $urlRouterProvider.when('', '/');
                $urlRouterProvider.otherwise('/404');

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }]);

