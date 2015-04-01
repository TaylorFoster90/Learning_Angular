'use strict'

angular.module('leoneStore', ['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
  $routeProvider
  .when('/posts', {
    templateUrl: 'pages/posts.html',
    controller: 'PostsController',
    controllerAs: 'posts'
  })
  .when('/about',{
    templateUrl: 'pages/about.html',
    controller: 'AboutController',
    controllerAs: 'about'
  })
  .when('/list',{
    templateUrl: 'pages/list.html',
    controller: 'AboutController',
    controllerAs: 'about'
  })
  .otherwise(
    {
      redirectTo: '/posts'
    }
  )
})
.controller('PostsController', function(){
  console.log('postsController')
})
.controller('AboutController', function(){
  this.show = false;
})
