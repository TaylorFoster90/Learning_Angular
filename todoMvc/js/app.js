(function (window) {
	'use strict';


	// Your starting point. Enjoy the ride!
var app = angular.module('todoMvc', ['firebase']);

app.controller('MainController', [ '$firebase', function($firebase){
		var ref = new Firebase('https://tiy-catlog.firebaseio.com/todoMvc');
		var sync = $firebase(ref);
		this.data = sync.$asArray();
		this.tasks = this.data;
		this.remove = function(item){
			this.tasks.$remove(item).then(console.log('removed '+ item.task + ' from the list'));

		};
		this.markAll = function(complete){
			_.forEach(this.data, function(object){
					object.complete = complete
		})
	}
		this.add = function(todo){
			this.data.$add({task:todo, complete: false}).then(console.log('added '+todo+' to the list'))
		};
		this.editing= function(todo){
			todo.edit = true;
		}
	}]);
})(window);
