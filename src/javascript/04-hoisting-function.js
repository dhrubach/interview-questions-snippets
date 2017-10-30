foo();

var foo;

function foo() {
	console.log('I am first...');
}

foo = function() {
	console.log('No, I am first...');
}
