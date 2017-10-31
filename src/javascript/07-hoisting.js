'use strict';

var bar;

baz();
bar();

bar = function () {
	console.log(`hello from bar`);
}

var baz;

function baz() {
	console.log(`hello from baz`);
}
