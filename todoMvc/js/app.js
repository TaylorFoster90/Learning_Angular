(function (window) {
	'use strict';


	// Your starting point. Enjoy the ride!
var app = angular.module('todoMvc', ['firebase']);

app.controller('MainController', [ '$firebase',function($firebase){
		var ref = new Firebase('https://tiy-catlog.firebaseio.com/todoMvc');
		var sync = $firebase(ref);
		this.data = sync.$asArray();
		this.data.$watch(function(event){
			console.log(event)
		})

		this.remove = function(item){
			this.data.$remove(item)
		};

		this.markAll = function(complete){
			_.forEach(this.data, function(object){
					object.complete = complete
		})
		this.data.$save(complete)
	}

		this.add = function(todo){
			this.data.$add({task:todo, complete: false})
		};

		this.editing= function(todo){
			todo.edit = true;
		}

		this.doneEditing = function (todo){
			todo.edit = false;
			this.data.$save(todo)
		}

		this.clearComplete = function (todo){
			for(var i=0;i<this.data.length;i++){
				if(this.data[i].complete == true){
					console.log(this.data[i].complete)
					this.data.$remove(this.data[i])
				}
			}
		}
	}]);
})(window);
