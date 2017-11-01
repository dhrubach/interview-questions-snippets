'use strict';

var foo = {
	bar: function () { return this.baz; },
	baz: 1
};

(function () {
	console.log(typeof arguments[0]());
})(foo.bar);
