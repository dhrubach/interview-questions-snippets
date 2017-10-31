'use strict';

var obj1 = {
	hello: function() {
		console.log(`hello, ${this.username}`);
	},
	username: 'Frodo Baggins'
};

var obj2 = {
	hello: obj1.hello,
	username: 'Samuel Gamjee'
};

obj2.hello();
