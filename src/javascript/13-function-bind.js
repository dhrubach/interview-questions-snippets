'use strict';

function foo() {
	return Array.prototype.slice.call(arguments);
}

console.log(foo(10, 20, 30));

var bar = foo.bind(null, 40);

console.log(bar(10, 20, 30));
