'use strict';

var f = (function f() {
	function f() { return 1; }

	return f();

	function f() { return 2; }
});

console.log(f());
