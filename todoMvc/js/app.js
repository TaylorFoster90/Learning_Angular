(function (window) {
	'use strict';
var todos = [
		{
			task: 'Taste Javascript',
			complete: true
		},
		{
		task: 'Buy a unicorn',
		complete: false
	}
]

	// Your starting point. Enjoy the ride!
var app = angular.module('todoMvc', ['firebase']);

app.controller('MainController', [ '$firebase', function($firebase){
		var ref = new Firebase('https://tiy-catlog.firebaseio.com/');
		var sync = $firebase(ref);
		this.data = sync.$asObject();
		this.tasks = todos;
		this.remove = function(item){
			_.pull(this.tasks, item)
		};
	}]);
})(window);
