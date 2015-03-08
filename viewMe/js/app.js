var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'pages/page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
    		templateUrl: 'pages/page-about.html',
            controller: 'aboutController'
    	})
    	.when('/contact', {
    		templateUrl: 'pages/page-contact.html',
            controller: 'contactController'
    	})
      .otherwise(
        {
          redirectTo: '/'
        }
      )

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});
