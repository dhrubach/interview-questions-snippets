'use strict';

function Foo() {
	setTimeout(function() {
		console.log(this.id);
	});
}

Foo.call({ id: 10 });
