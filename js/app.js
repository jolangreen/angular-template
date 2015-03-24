/**
 * New browsers support a new mode to use JavaScript called strict mode,
 * if you declare that in your code the compiler will be more strict in order
 * to avoid errors and mistakes. Usually JavaScript accepts few mistakes
 * without breaking the code nor alerting you, using strict mode this will not happen
 */
'use strict';


/**
 * First step is to create a Angular module to hold our application, note
 * that the ngRoute module was include after our application name inside an array
 * we call that dependency injection. In order to manage route in our application
 * Angular Team have created a separate module for that called ngRoute, and if we want
 * to define routes in our application we need to include that dependency.
 */
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);


/**
 * Now the variable called 'myApp' contains our module (our application)
 * Using the config method we will setup routes for our project.
 * $routeProvider is a service from ngRoute module that is responsible
 * for managing the routes in your project
 */
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(false).hashPrefix('!');
    
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller : 'HomeController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller : 'UsersController'
    })
    .when('/services', {
        templateUrl: 'views/services.html',
        controller : 'UsersController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller : 'ContactController'
    })
    .otherwise({
        redirectTo: '/'
    })

}])
