function sum() {

	const reducer = (acc, val) => {
		return acc + val;
	};

	return Array.prototype.reduce.call(arguments, reducer, 0);
}

console.log(sum.apply(null, [1, 2, 3, 4, 5]));
