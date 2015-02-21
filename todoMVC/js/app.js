(function (window) {
    'use strict';

var tasks =[{
	content: "Taste Javascript",
	done: false
},
{
	content: 'Buy a unicorn',
	done: true
}]

// Your starting point. Enjoy the ride!
  new Vue({
    el: '#todoapp',
    data: {
      todos: tasks,
    },
  });
})(window);
