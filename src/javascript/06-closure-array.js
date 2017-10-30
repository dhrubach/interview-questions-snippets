function displayArrayElement(arr) {
	let result = [];

	for (var i = 0; i < arr.length; i++) {
		result[i] = function () { return arr[i]; };
	}

	return result;
}

const arr = [10, 20, 30, 40, 50];
const res = displayArrayElement(arr);

console.log(res[1]());
